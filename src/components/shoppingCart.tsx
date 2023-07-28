import { useContext } from "react"
import { Container, Footer, IconContainer, ItemList, QuantityContainer, ShoppingCartContainer, TotalContainer } from "../styles/Components/shoppingCart";
import { X } from "@phosphor-icons/react"
import CartItem from "./cartItem";
import CartContext from "../contexts/CartContext";


const item = {
	name: "Camiseta Maratona Explorer 2.0",
	imageUrl: "https://files.stripe.com/links/MDB8YWNjdF8xTllCOU5Ha2RJRzBmSGo3fGZsX3Rlc3Rfak1FYUFDRU93YnRtTXBKQmFYUUlDUUtm00uUP2oMGq",
	price: "74,90",
}

export default function ShoppingCart() {
	const {showCart, toggleShowCart} = useContext(CartContext)
	return (
		<ShoppingCartContainer isVisible={showCart}>
			<IconContainer onClick={toggleShowCart}>
				<X size={24} />

			</IconContainer>
			<Container >

				<h1>Sacola de compras</h1>

				<ItemList>
					<CartItem {...item} />
				</ItemList>
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