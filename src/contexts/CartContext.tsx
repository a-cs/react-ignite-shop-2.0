import { ReactNode, createContext, useReducer, useState } from 'react'
import { CartReducer, IProduct } from '../reducers/Cart/Reducer'
import {
	addNewItemAction,
	changeItemQuantityAction,
	removeAllItemsAction,
	removeItemAction,
} from '../reducers/Cart/Actions'

interface CartContextProviderProps {
	children: ReactNode
}

interface CartContextType {
	cart: IProduct[]
	cartTotalQuantity: number
	showCart: boolean
	toggleShowCart: () => void
	addItemToCart: (item: IProduct) => void
	changeItemQuantity: (itemId: string, quantity: number) => void
	removeItem: (itemId: string) => void
	removeAllItems: () => void
}

export const CartContext = createContext({} as CartContextType)
export function CartContextProvider({ children }: CartContextProviderProps) {
	const [cartState, dispatch] = useReducer(
		CartReducer,
		{
			cart: [],
		},
		(initialState) => {
			let storedStateAsJSON = null
			if (typeof window !== 'undefined') {
				storedStateAsJSON = localStorage.getItem(
					'@IgniteShop2.0:cartData',
				)
			}

			if (storedStateAsJSON) return JSON.parse(storedStateAsJSON)
			return initialState
		},
	)
	const { cart } = cartState

	const cartTotalQuantity = cart.reduce(
		(accumulator, currentValue) => accumulator + currentValue.quantity,
		0,
	)
	const [showCart, setShowCart] = useState(false)

	function toggleShowCart() {
		console.log("toggle", showCart)
		setShowCart(state => !state)
	}

	function isItemInCart(itemId: string){
		return cart.find(item => item.id === itemId)
	}


	function addItemToCart(item: IProduct) {
		const itemInCart = isItemInCart(item.id)
		if(!itemInCart)
			dispatch(addNewItemAction(item))
		else
			changeItemQuantity(item.id, itemInCart.quantity + 1)
	}

	function changeItemQuantity(itemId: string, quantity: number) {
		dispatch(changeItemQuantityAction(itemId, quantity))
	}

	function removeItem(itemId: string) {
		dispatch(removeItemAction(itemId))
	}
	function removeAllItems() {
		dispatch(removeAllItemsAction())
	}
	return (
		<CartContext.Provider
			value={{
				cart,
				cartTotalQuantity,
				showCart,
				toggleShowCart,
				addItemToCart,
				changeItemQuantity,
				removeItem,
				removeAllItems,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}

export default CartContext
