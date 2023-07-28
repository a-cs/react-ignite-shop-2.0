import { styled } from ".."

export const HeaderContainer = styled("header", {
	padding: "2rem 0",
	width: "100%",
	maxWidth: 1180,
	margin: "0 auto",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center"
})

export const ShoppingCartIcon = styled("button",{
	border: "none",
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

	

})

export const CircleContainer = styled("div",{
	position:"absolute",
	right: -7,
	top: -7,
	width: 24,
	height: 24,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	borderRadius: "50%",
	border: "3px solid $gray900",
	background: "$green500",
	color: "$white",
	fontSize: "0.875rem",
})