import Image from "next/image";
import Link from "next/link";
import { CircleContainer, HeaderContainer, ShoppingCartIcon } from "../styles/Components/header";
import { Handbag } from "@phosphor-icons/react";
import logoImg from "../assets/Logo.svg"
import { useContext, useState, useEffect } from "react"
import CartContext from "../contexts/CartContext";

export default function Header() {
	const {toggleShowCart, cartTotalQuantity} = useContext(CartContext)
	const [isClient, setIsClient] = useState(false)
 
	useEffect(() => {
		setIsClient(true)
	}, [])

	return (
		<HeaderContainer>
			<Link href="/" >
				<Image src={logoImg} alt="" />
			</Link>
			<ShoppingCartIcon onClick={toggleShowCart}>
				<Handbag size={24} />
				{isClient && cartTotalQuantity !== 0 && <CircleContainer>{cartTotalQuantity}</CircleContainer>}
			</ShoppingCartIcon>
		</HeaderContainer>
	)
}