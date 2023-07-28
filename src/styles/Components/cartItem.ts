import { styled } from ".."

export const ItemContainer = styled("div", {
	display: "flex",
	flexDirection: "row",
	gap: 20,
})

export const ImageContainer = styled("div", {
	width: "100%",
	maxWidth: 102,
	height: 93,
	background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
	borderRadius: 8,
	padding: "0 3.6rem",

	display: "flex",
	alignItems: "center",
	justifyContent: "center",

	img: {
		objectFit: "cover",
	}
})

export const ItemInfo = styled("div", {
	width: "100%",
	display: "flex",
	flexDirection: "column",

	p: {
		color: "$gray300",
		lineHeight: 1.6,
	},

	div: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},

	span: {
		color: "$gray100",
		fontSize: "$md",
		fontWeight: 700,
		lineHeight: 1.6,
	},

	button: {
		marginTop: "auto",
		border: "none",
		backgroundColor: "transparent",
		color: "$green500",
		fontWeight: 700,
		lineHeight: 1.6,
		textAlign: "start",
		cursor: "pointer",
		transition: "0.2s",

		"&:hover": {
			color: "$green300",
		}
	}
})