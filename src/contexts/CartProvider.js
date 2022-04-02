import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === "ADD") {
		const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
		const existingCartItem = state.items[existingCartItemIndex];
		let updatedItems;
		if (existingCartItem) {
			updatedItems = [...state.items];
			updatedItems[existingCartItemIndex].amount += action.item.amount;
		} else {
			updatedItems = state.items.concat(action.item);
		}

		const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
		return { items: updatedItems, totalAmount: updatedTotalAmount };
	}

	if (action.type === "REMOVE") {
		const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
		const existingCartItem = state.items[existingCartItemIndex];
		let updatedItems = state.items;
		const updatedTotalAmount = state.totalAmount - existingCartItem.price;
		if (existingCartItem.amount === 1) {
			console.log(updatedItems);
			updatedItems = updatedItems.filter((item) => item.id !== existingCartItem.id);
		} else {
			updatedItems[existingCartItemIndex].amount -= 1;
		}
		return { items: updatedItems, totalAmount: updatedTotalAmount };
	}
	return defaultCartState;
};

function CartProvider(props) {
	const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

	function addItemHandler(item) {
		dispatchCartAction({
			type: "ADD",
			item: item,
		});
	}

	function removeItemHandler(id) {
		dispatchCartAction({
			type: "REMOVE",
			id: id,
		});
	}

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemHandler,
		removeItem: removeItemHandler,
	};
	return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
}

export default CartProvider;
