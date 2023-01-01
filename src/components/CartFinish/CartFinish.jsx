import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartFinish = () => {
  const {listaPelicula} = useContext(CartContext)
  return(<div> 
    {
    listaPelicula.map((lp)=>{
       return( 
       <div>
        <p>hola</p>
            {/* <p>{lp.name}</p>
            <p>{lp.price}</p> */}
        </div>
        )
    })
}
</div>)

}

export default CartFinish          