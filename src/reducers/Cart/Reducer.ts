import { ActionTypes } from './Actions'

export interface IProduct {
	id: string;
	name: string;
	imageUrl: string;
	price: string;
	description: string;
	defaultPriceId: string;
	quantity: number;
}

interface CartState {
	cart: IProduct[]
}

export function CartReducer(state: CartState, action: any) {
	console.log('action:', action)
	console.log('state:', state)
	switch (action.type) {
		case ActionTypes.ADD_NEW_ITEM: {
			const newState = {
				...state,
				cart: [...state.cart, action.payload.newItem],
			}
			if (typeof window !== 'undefined') {
				localStorage.setItem(
					'@IgniteShop2.0:cartData',
					JSON.stringify(newState),
				)
			}

			return newState
		}
		case ActionTypes.CHANGE_ITEM_QUANTITY: {
			const newState = {
				...state,
				cart: state.cart.map((item) =>
					item.id === action.payload.itemId
						? { ...item, quantity: action.payload.newQuantity }
						: item,
				),
			}
			if (typeof window !== 'undefined') {
				localStorage.setItem(
					'@IgniteShop2.0:cartData',
					JSON.stringify(newState),
				)
			}

			return newState
		}
		case ActionTypes.REMOVE_ITEM: {
			const newState = {
				...state,
				cart: state.cart.filter(
					(item) => item.id !== action.payload.itemId,
				),
			}
			if (typeof window !== 'undefined') {
				localStorage.setItem(
					'@IgniteShop2.0:cartData',
					JSON.stringify(newState),
				)
			}

			return newState
		}
		case ActionTypes.REMOVE_ALL_ITEMS: {
			const newState = {
				...state,
				cart: [],
			}
			if (typeof window !== 'undefined') {
				localStorage.removeItem('@IgniteShop2.0:cartData')
			}

			return newState
		}
		default:
			return state
	}
}
