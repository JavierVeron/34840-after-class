import React from "react";

const CartWidget = () => {
    return (
        <button type="button" className="btn fondoNaranja position-relative">
            <img src={"images/basket.svg"} alt={"Carrito"} width={24} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
        </button>
    )
}

export default CartWidget;