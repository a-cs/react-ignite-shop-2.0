import Image from "next/image";
import { useContext } from "react"
import { ImageContainer, ItemContainer, ItemInfo } from "../styles/Components/cartItem";
import CartContext from "../contexts/CartContext";

interface CartItemProps {
	id: string;
	name: string;
	imageUrl: string;
	price: string;
	quantity: number
}
export default function CartItem({ id, name, imageUrl, price, quantity }: CartItemProps) {
	const {removeItem} = useContext(CartContext)

	function handleRemoveItem(){
		removeItem(id)
	}
	
	return (
		<ItemContainer>
			<ImageContainer>
				<Image src={imageUrl} width={95} height={95} alt="" />
			</ImageContainer>
			<ItemInfo>
				<p>{name}</p>
				<div>
					<span>{quantity}x</span>
					<span>{price}</span>
				</div>
				<button onClick={handleRemoveItem}>Remover</button>
			</ItemInfo>
		</ItemContainer>
	)
}