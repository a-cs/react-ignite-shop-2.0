import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { globalStyles } from '../styles/global'
import { Container} from '../styles/pages/app'
const ShoppingCart = dynamic(() => import('../components/shoppingCart'), { ssr: false })
import { CartContextProvider } from '../contexts/CartContext'
import Header from '../components/header'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
	

	return (
		<Container>
			<CartContextProvider>
				<Header />
				<ShoppingCart />
				<Component {...pageProps} />
			</CartContextProvider>
		</Container>
	)
}
