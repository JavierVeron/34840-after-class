import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {cartTotal} = useContext(CartContext);

    return cartTotal() ? <Link to={"/cart"} className="btn fondoNaranja position-relative" title="Ir al Carrito">
            <img src={"/images/basket.svg"} alt={"Carrito"} width={24} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
        </Link> : "";
    
}

export default CartWidget;