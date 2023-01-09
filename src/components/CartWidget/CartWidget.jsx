import React from "react";
import { useContext } from "react";
import "./CartWidget.css";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
const CartWidget = () => {
  const { count } = useContext(CartContext);
  return (
    <div className="pos__carrito">
      <img
        className="cartt"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCZDgAA7r320jOQIi9Fv7E6z2Rx1-WJ50y25mDDspCigcv2VM5kzJKQxtQLL61WaAP4po&usqp=CAU"
        width={100}
        height={100}
      />
      <div className="cart__count">
        <p>{count}</p>
      </div>
      <Link to="/CartWidget"> Terminar compra</Link>
    </div>
  );
};

export default CartWidget;
