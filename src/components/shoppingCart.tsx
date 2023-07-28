import { useContext, useMemo, useState } from "react"
import { Container, Footer, IconContainer, ItemList, QuantityContainer, ShoppingCartContainer, TotalContainer } from "../styles/Components/shoppingCart";
import { X } from "@phosphor-icons/react"
import CartItem from "./cartItem";
import CartContext from "../contexts/CartContext";
import { IProduct } from "../reducers/Cart/Reducer";
import axios from "axios";

export default function ShoppingCart() {
	const { showCart, toggleShowCart, cart, cartTotalQuantity } = useContext(CartContext)

	const cartTotalPrice = useMemo(():number => { return cart.reduce(
		(accumulator, currentValue) => {
			return accumulator + currentValue.quantity * parseFloat(currentValue.price.replace("R$ ", "").replace(",", "."))
		},
		0,
	)},[cart])

	const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

	async function handleCheckout(){
		const lineItems = cart.map((item:IProduct) => {
			const {defaultPriceId: price, quantity} = item
			const lineItem = {price, quantity}
			return lineItem
		})
		try {
			setIsCreatingCheckoutSession(true)
			const response = await axios.post("/api/checkout", {
				lineItems
			})
			const { checkoutUrl } = response.data

			window.location.href = checkoutUrl
		} catch (err) {
			setIsCreatingCheckoutSession(false)
			alert("Falha ao direcionar ao checkout")
		}
		
	}

	
	return (
		<ShoppingCartContainer isVisible={showCart}>
			<IconContainer onClick={toggleShowCart}>
				<X size={24} />

			</IconContainer>
			<Container >

				<h1>Sacola de compras</h1>

				<ItemList>
					{
						cart.map(item => {
							return <CartItem key={item.id} {...item} />
						})
					}
				</ItemList>
				<Footer>
					<QuantityContainer>
						<p>Quantidade</p>
						<span>{cartTotalQuantity} items</span>
					</QuantityContainer>
					<TotalContainer>
						<p>Valor total</p>
						<span>{
							new Intl.NumberFormat("pt-BR", {
								style: "currency",
								currency: "BRL"
							}).format(cartTotalPrice)
						}</span>
					</TotalContainer>

					<button disabled={cart.length === 0 || isCreatingCheckoutSession} onClick={handleCheckout}>Finalizar compra</button>
				</Footer>
			</Container>
		</ShoppingCartContainer>
	)
}