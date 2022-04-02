import classes from "./MealItemForm.module.css";
import { useRef, useState } from "react";
import Input from "../../UI/Input";

function MealItemForm(props) {
	const inputRef = useRef();
	const [amountIsValid, setAmountIsValid] = useState(true);

	function submitHandler(event) {
		event.preventDefault();
		//prettier-ignore
		const enteredAmount = +(inputRef.current.value);
		if (enteredAmount < 1 || enteredAmount > 5 || isNaN(enteredAmount)) {
			setAmountIsValid(false);
			return;
		}
		props.onAddItem(enteredAmount);
	}

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<Input
				ref={inputRef}
				label="Amount"
				input={{
					id: `amount${props.id}`,
					type: "number",
					min: "1",
					max: "5",
					defaultValue: "1",
				}}
			></Input>
			<button type="submit">Add</button>
			{!amountIsValid && <p>Please enter valid amount (1-5)</p>}
		</form>
	);
}

export default MealItemForm;
