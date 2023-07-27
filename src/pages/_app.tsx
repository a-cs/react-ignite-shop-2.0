import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import {useState} from "react"

import logoImg from "../assets/Logo.svg"
import { Container, Header, ShoppingCartIcon } from '../styles/pages/app'
import Image from 'next/image'
import Link from 'next/link'
import { Handbag } from '@phosphor-icons/react'
import ShoppingCart from '../components/shoppingCart'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
	const [isVisible, setIsVisible] = useState(true)
	function handleToggleCartVisibility(){
		setIsVisible(state => !state)
	}
	return (
		<Container>
			<Header>
				<Link href="/" >
					<Image src={logoImg} alt="" />
				</Link>
				<ShoppingCartIcon onClick={handleToggleCartVisibility}>
					<Handbag size={24} />
					<span>1</span>
				</ShoppingCartIcon>
			</Header>
			<ShoppingCart isVisible={isVisible}/>
			<Component {...pageProps} />
		</Container>
	)
}
