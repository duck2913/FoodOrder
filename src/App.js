import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./contexts/CartProvider";

function App() {
	function showCartHandler() {
		setCartIsShown(true);
	}

	function hideCartHandler() {
		setCartIsShown(false);
	}

	const [cartIsShown, setCartIsShown] = useState(false);

	return (
		<CartProvider>
			{cartIsShown && <Cart onHideCart={hideCartHandler} />}
			<Header onShowCart={showCartHandler}></Header>
			<main>
				<Meals></Meals>
			</main>
		</CartProvider>
	);
}

export default App;
