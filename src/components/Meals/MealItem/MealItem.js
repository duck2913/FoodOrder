import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../contexts/cart-context";

function MealItem(props) {
	const cartContext = useContext(CartContext);

	function addItemHandler(amount) {
		cartContext.addItem({
			id: props.id,
			price: props.price,
			amount: amount,
			name: props.name,
		});
	}

	const price = `$${props.price.toFixed(2)}`;
	return (
		<li className={classes.meal}>
			<div>
				<h3>{props.name}</h3>
				<div className={classes.description}>{props.description}</div>
				<div className={classes.price}>{price}</div>
			</div>
			<div>
				<MealItemForm id={props.id} onAddItem={addItemHandler}></MealItemForm>
			</div>
		</li>
	);
}

export default MealItem;
