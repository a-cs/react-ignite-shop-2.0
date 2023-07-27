import Image from "next/image"
import { GetServerSideProps, GetStaticProps } from "next"
import Head from "next/head";
import { stripe } from "../lib/stripe"
import { useKeenSlider } from "keen-slider/react"

import { HomeContainer, Product, ProductInfo, ShoppingCartIcon } from "../styles/pages/home"

import "keen-slider/keen-slider.min.css"
import Stripe from "stripe"
import Link from "next/link"

import { Handbag } from '@phosphor-icons/react'


interface HomeProps {
	products: {
		id: string;
		name: string;
		imageUrl: string;
		price: string;
	}[]
}

export default function Home({ products }: HomeProps) {
	const [sliderRef,] = useKeenSlider({
		slides: {
			perView: 2.4,
			spacing: 48
		}
	})

	return (
		<>
			<Head>
				<title>Home | Ignite Shop 2.0</title>
			</Head>

			<HomeContainer ref={sliderRef} className="keen-slider">
				{products.map(product => {
					return (
						<Link key={product.id} href={`/product/${product.id}`} prefetch={false}>
							<Product className="keen-slider__slide">
								<Image src={product.imageUrl} priority={true} width={520} height={480} alt="" />
								<footer>
									<ProductInfo>
										<strong>{product.name}</strong>
										<span>{product.price}</span>
									</ProductInfo>
									<ShoppingCartIcon>
										<Handbag size={32} />

									</ShoppingCartIcon>
								</footer>
							</Product>
						</Link>
					)
				})}
			</HomeContainer>
		</>
	)
}

// export const getServerSideProps: GetServerSideProps = async () => {
// 	const response = await stripe.products.list({
// 		expand: ["data.default_price"]
// 	})

// 	const products = response.data.map(product => {
// 		const price = product.default_price as Stripe.Price
// 		return {
// 			id: product.id,
// 			name: product.name,
// 			imageUrl: product.images[0],
// 			price: price.unit_amount! / 100
// 		}
// 	})
// 	console.log(response.data)
// 	return {
// 		props: {
// 			products
// 		}
// 	}
// }

export const getStaticProps: GetStaticProps = async () => {
	const response = await stripe.products.list({
		expand: ["data.default_price"]
	})

	const products = response.data.map(product => {
		const price = product.default_price as Stripe.Price
		return {
			id: product.id,
			name: product.name,
			imageUrl: product.images[0],
			price: new Intl.NumberFormat("pt-BR", {
				style: "currency",
				currency: "BRL"
			}).format(price.unit_amount! / 100)
		}
	})
	return {
		props: {
			products
		},
		revalidate: 60 * 60 * 2
	}
}
