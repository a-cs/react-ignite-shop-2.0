import { GetServerSideProps } from "next";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import {useContext} from "react"
import { ImageContainer, ImageList, SuccessContainer } from "../styles/pages/success";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import CartContext from "../contexts/CartContext";

interface SuccessProps {
	customerName: string;
	products: Stripe.Product[]
}

export default function Success({ customerName, products }: SuccessProps) {
	const {removeAllItems} = useContext(CartContext)
	console.log("products:", products)
	if(products && customerName){
		removeAllItems()
	}
	return (
		<>
			<Head>
				<title>Compra efetuada | Ignite Shop 2.0</title>
				<meta name="robots" content="noindex" />
			</Head>

			<SuccessContainer>
				<h1>Compra Efetuada</h1>

				<ImageList>

					{products.map(product => {
						return(
					<ImageContainer key={product.id}>
						<Image src={product.images[0]} width={120} height={110} alt=""></Image>
					</ImageContainer>

						)
					})}
				</ImageList>

				<p>
					Uhuul <strong>{customerName}</strong>, sua compra de <strong>{products.length} camisetas</strong> já está a caminho da sua casa.
				</p>

				<Link href="/">
					Voltar ao catálogo
				</Link>
			</SuccessContainer>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	if (!query.session_id) {
		return {
			redirect: {
				destination: "/",
				permanent: false
			}
		}
	}

	const sessionId = String(query.session_id)

	const session = await stripe.checkout.sessions.retrieve(sessionId, {
		expand: ["line_items", "line_items.data.price.product"]
	})

	const customerName = session.customer_details.name
	const products = session.line_items.data.map(element => element.price.product as Stripe.Product )

	return {
		props: {
			customerName,
			products
		}
	}
}