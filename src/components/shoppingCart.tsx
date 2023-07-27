import { Container, Footer, IconContainer, QuantityContainer, ShoppingCartContainer, TotalContainer } from "../styles/Components/shoppingCart";
import { X } from "@phosphor-icons/react"

interface ShoppingCartProps {
	isVisible: boolean;
}

export default function ShoppingCart({ isVisible }: ShoppingCartProps) {
	return (
		<ShoppingCartContainer isVisible={isVisible}>
				<IconContainer>
					<X size={24}/>

				</IconContainer>
			<Container >

				<h1>Sacola de compras</h1>

				items
				<Footer>
					<QuantityContainer>
						<p>Quantidade</p>
						<span>3 items</span>
					</QuantityContainer>
					<TotalContainer>
						<p>Valor total</p>
						<span>R$ 270,00</span>
					</TotalContainer>

					<button>Finalizar compra</button>
				</Footer>
			</Container>
		</ShoppingCartContainer>
	)
}