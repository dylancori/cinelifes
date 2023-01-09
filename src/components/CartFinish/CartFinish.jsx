import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import './CartFinish.css'


const CartFinish = () => {
  const { peliculas } = useContext(CartContext);
  console.log(peliculas)
  return (
    <div>
      {peliculas.map((peli) => {
        return (
          <div className="finish">
            <p>{peli.name}</p>
            <p>{peli.count}</p>
            <p>{peli.precio}</p>
            
          </div>
        );
    
      })}
    </div>
  );
};

export default CartFinish;
