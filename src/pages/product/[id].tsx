import { GetStaticPaths, GetStaticProps } from "next";
import { useState, useContext } from "react"
import { ImageContainer, ProductContainer, ProductDetails } from "@/src/styles/pages/product";
import { stripe } from "../../lib/stripe"
import Stripe from "stripe";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import Head from "next/head";
import CartContext from "@/src/contexts/CartContext";
import {IProduct} from "@/src/reducers/Cart/Reducer"

interface ProductProps {
	product: {
		id: string;
		name: string;
		imageUrl: string;
		price: string;
		description: string;
		defaultPriceId: string;
	}
}

export default function Product({ product }: ProductProps) {
	const {addItemToCart} = useContext(CartContext)

	async function handleBuyProduct() {
		const productToAdd: IProduct = {...product, quantity: 1}
		addItemToCart(productToAdd)
	}

	return (
		<>
			<Head>
				<title>{product.name} | Ignite Shop 2.0</title>
			</Head>

			<ProductContainer>
				<ImageContainer>
					<Image src={product.imageUrl} width={520} height={480} alt="" />
				</ImageContainer>
				<ProductDetails>
					<h1>{product.name}</h1>
					<span>{product.price}</span>

					<p>
						{product.description}
					</p>

					<button onClick={handleBuyProduct}>Colocar na sacola</button>
				</ProductDetails>
			</ProductContainer>
		</>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [
			// {params: {id: "prod_OKrBQLJUj2nepU"}}
		],
		fallback: true
	}
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
	const productId = params.id

	const product = await stripe.products.retrieve(productId, {
		expand: ["default_price"]
	})

	const price = product.default_price as Stripe.Price

	return {
		props: {
			product: {
				id: product.id,
				name: product.name,
				imageUrl: product.images[0],
				price: new Intl.NumberFormat("pt-BR", {
					style: "currency",
					currency: "BRL"
				}).format(price.unit_amount! / 100),
				description: product.description,
				defaultPriceId: price.id
			}
		},
		revalidate: 60 * 60 * 1
	}
}