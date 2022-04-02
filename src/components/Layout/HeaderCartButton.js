import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../contexts/cart-context";
import { useContext, useState, useEffect } from "react";

function HeaderCartButton(props) {
	const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
	const cartContext = useContext(CartContext);
	const numberOfItems = cartContext.items.reduce((currNum, item) => {
		return (currNum += item.amount);
	}, 0);

	useEffect(() => {
		setBtnIsHighlighted(true);
		const timer = setTimeout(() => {
			setBtnIsHighlighted(false);
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [cartContext.items]);
	const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ""}`;

	return (
		<button className={btnClasses} onClick={props.onShowCart}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your cart</span>
			<span className={classes.badge}>{numberOfItems}</span>
		</button>
	);
}

export default HeaderCartButton;
