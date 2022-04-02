import React from "react";

const CartContext = React.createContext({
	items: [],
	totalValue: 0,
	addItem: () => {},
	removeItem: () => {},
});

export default CartContext;
