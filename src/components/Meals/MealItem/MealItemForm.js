import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

function MealItemForm(props) {
	return (
		<form className={classes.form}>
			<Input
				label="Amount"
				input={{
					id: `amount${props.id}`,
					type: "number",
					min: "1",
					max: "5",
					defaultValue: "1",
				}}
			></Input>
			<button type="button">Add</button>
		</form>
	);
}

export default MealItemForm;
