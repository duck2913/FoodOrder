import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

function Backdrop(props) {
	return <div className={classes.backdrop} onClick={props.onHideCart} />;
}

function ModalOverlay(props) {
	return <div className={classes.modal}>{props.children}</div>;
}

function Modal(props) {
	const portalDestination = document.querySelector("#overlays");
	return (
		<>
			{ReactDOM.createPortal(<Backdrop onHideCart={props.onHideCart} />, portalDestination)}
			{ReactDOM.createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				portalDestination,
			)}
		</>
	);
}

export default Modal;
