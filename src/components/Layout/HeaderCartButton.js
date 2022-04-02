import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../contexts/cart-context";
import { useContext } from "react";

function HeaderCartButton(props) {
	const cartContext = useContext(CartContext);
	const numberOfItems = cartContext.items.reduce((currNum, item) => {
		return (currNum += item.amount);
	}, 0);

	return (
		<button className={classes.button} onClick={props.onShowCart}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your cart</span>
			<span className={classes.badge}>{numberOfItems}</span>
		</button>
	);
}

export default HeaderCartButton;
