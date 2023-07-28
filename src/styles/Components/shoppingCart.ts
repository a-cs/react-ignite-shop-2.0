import { styled } from "..";

export const ShoppingCartContainer = styled("div", {
	width: 480,
	height: "100vh",

	backgroundColor: "$gray800",
	boxShadow: "-4px 0px 30px 0px rgba(0, 0, 0, 0.80)",
	position: "fixed",
	right: 0,
	overflowY: "auto",

	zIndex: 10,
	transition: "all 0.2s ease-in-out",

	variants: {
		isVisible: {
			true: {
				transform: "translateX(0%)",
				opacity: 1,
			},
			false: {
				transform: "translateX(110%)",
				opacity: 0
			 },
		},
	},
})

export const Container = styled("div", {
	width: "100%",
	height: "100%",
	display: "flex",
	flexDirection: "column",
	padding: "4.5rem 3rem 3rem",

	h1: {
		color: "gray100",
		fontSize: "$lg",
		fontWeight: 700,
		lineHeight: "160%",
		marginBottom: "2rem",
	},

})

export const Footer = styled("footer", {
	marginTop: "auto",
	paddingTop: "3rem",

	button: {
		width: 384,
		backgroundColor: "$green500",
		border: 0,
		color: "$white",
		borderRadius: 8,
		padding: "1.25rem 2rem",
		cursor: "pointer",
		fontWeight: "bold",
		fontSize: "$md",

		"&:disabled": {
			opacity: 0.6,
			cursor: "not-allowed",
		},

		"&:not(:disabled):hover": {
			backgroundColor: "$green300",
		},
	}
})


export const RowContainer = styled("div", {
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: "center",
})

export const QuantityContainer = styled(RowContainer, {
	p: {
		color: "$gray100",
		lineHeight: 1.6,
	},

	span: {
		fontSize: "$md",
		color: "$gray300",
		lineHeight: 1.6,
	}
})

export const TotalContainer = styled(RowContainer, {
	marginTop: 4,
	marginBottom: 55,

	p: {
		fontSize: "$md",
		fontWeight: 700,
		color: "$gray100",
		lineHeight: 1.6,
	},

	span: {
		fontSize: "$xl",
		color: "$gray100",
		lineHeight: 1.4,
	}
})

export const IconContainer = styled("button", {
	position: "absolute",
	top: 24,
	right: 24,

	border: "none",
	backgroundColor: "transparent",
	width: 32,
	height: 32,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	color: "$gray500",
	cursor: "pointer",

	"&:hover":{
		color: "$gray100",
		transition: "0.2s",
	},

})

export const ItemList = styled("div", {
	display: "flex",
	flexDirection: "column",
	gap: 24,
	overflowY: "auto",
	borderRadius: 8,
	minHeight: 200,
	maxHeight: "calc(100vh - 405px)",
	height: "100%",
})

