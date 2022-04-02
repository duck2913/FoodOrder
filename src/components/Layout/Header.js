import mealsImg from "../../assets/meals.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = function (props) {
	return (
		<>
			<header className={styles.header}>
				<h1>Let's Order</h1>
				<HeaderCartButton onShowCart={props.onShowCart}>Buy now</HeaderCartButton>
			</header>
			<div className={styles["main-image"]}>
				<img src={mealsImg} alt="meals img"></img>
			</div>
		</>
	);
};

export default Header;
