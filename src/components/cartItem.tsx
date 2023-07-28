import Image from "next/image";
import { ImageContainer, ItemContainer, ItemInfo } from "../styles/Components/cartItem";

interface CartItemProps {
	name: string;
	imageUrl: string;
	price: string;
}
export default function CartItem({name, imageUrl, price }: CartItemProps) {
	return (
		<ItemContainer>
			<ImageContainer>
				<Image src={imageUrl} width={95} height={95} alt="" />
			</ImageContainer>
			<ItemInfo>
				<p>{name}</p>
				<span>{price}</span>
				<button>Remover</button>
			</ItemInfo>
		</ItemContainer>
	)
}