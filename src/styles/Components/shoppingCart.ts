import { styled } from "..";

export const ShoppingCartContainer = styled("div", {
	width: 480,
	height: "100vh",

	backgroundColor: "$gray800",
	position: "fixed",
	right: 0,

	zIndex: 10,

	variants: {
		isVisible: {
			true: { opacity: 1 },
			false: { opacity: 0 },
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
	},

})

export const Footer = styled("footer", {
	marginTop: "auto",

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