import {createContext, useReducer} from 'react'
import { CartReducer } from './CartReducer'

export const CartContext = createContext(0)

const initialState = {
    count: 0,
    pelicula:{},
    listaPelicula:[]
}

export const CartContextProvider =({children}) =>{
    const [state,dispatch] = useReducer(CartReducer,initialState)

    function addCount(count,pelicula){
        // console.log('On change?')
        // console.log(`${count}`)
        dispatch({
            type:"ADD_ITEMS",
            payload:{count,pelicula}
        })
        console.log(state)
    }

 
    return(
        <CartContext.Provider
        value={{
            count:state.count,
            pelicula:state.pelicula,
            listaPelicula:state.listaPelicula,
            addCount,
        }}
        >
            {children}
        </CartContext.Provider>
    )
}