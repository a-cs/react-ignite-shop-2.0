import { styled } from "..";

export const Container = styled("div", {
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-start",
	minHeight: "100vh",
	paddingBottom: "7.5rem",
})

export const Header = styled("header", {
	padding: "2rem 0",
	width: "100%",
	maxWidth: 1180,
	margin: "0 auto",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center"
})

export const ShoppingCartIcon = styled("div",{
	width: "3rem",
	height: "3rem",
	backgroundColor: "$gray800",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	borderRadius: 6,
	color: "$gray500",
	cursor: "pointer",
	position: "relative",

	"&:hover":{
		filter: "brightness(140%)",
		transition: "0.2s",
	},

	span:{
		position:"absolute",
		right: -7,
		top: -7,
		width: 24,
		height: 24,
		textAlign:"center",
		borderRadius: "50%",
		border: "3px solid $gray900",
		background: "$green500",
		color: "$white"
	}

})