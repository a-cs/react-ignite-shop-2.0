import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import logoImg from "../assets/Logo.svg"
import { Container, Header, ShoppingCartIcon } from '../styles/pages/app'
import Image from 'next/image'
import Link from 'next/link'
import { Handbag } from '@phosphor-icons/react'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Container>
			<Header>
				<Link href="/" >
					<Image src={logoImg} alt="" />
				</Link>
				<ShoppingCartIcon>
					<Handbag size={24} />
					<span>1</span>
				</ShoppingCartIcon>
			</Header>
			<Component {...pageProps} />
		</Container>
	)
}
