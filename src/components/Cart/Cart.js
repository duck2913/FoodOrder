import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../../contexts/cart-context";
import CartItem from "./CartItem";

function Cart(props) {
	const cartContext = useContext(CartContext);
	const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;

	const cartItemAddHandler = (item) => {
		cartContext.addItem({ ...item, amount: 1 });
	};

	const cartItemRemoveHandler = (id) => {
		cartContext.removeItem(id);
	};

	const cartItems = (
		<ul className={classes["cart-items"]}>
			{cartContext.items.map((item) => (
				<CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onRemove={cartItemRemoveHandler.bind(item, item.id)}
					onAdd={cartItemAddHandler.bind(item, item)}
				/>
			))}
		</ul>
	);
	return (
		<Modal onHideCart={props.onHideCart}>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className={classes.actions}>
				<button className={classes["button--alt"]} onClick={props.onHideCart}>
					Close
				</button>
				{cartItems.length > 1 && <button className={classes.button}>Order</button>}
			</div>
		</Modal>
	);
}

export default Cart;
