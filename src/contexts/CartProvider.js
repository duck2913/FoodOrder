import CartContext from "./cart-context";

function CartProvider(props) {
	function addItemHandler(item) {}

	function removeItemHandler(item) {}

	const cartContext = {
		items: [],
		totalValue: 0,
		addItem: addItemHandler,
		removeItem: removeItemHandler,
	};
	return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
}

export default CartProvider;
