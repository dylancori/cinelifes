import { createContext, useReducer } from "react";

export const CartContext = createContext(null);

const initialState = {
  peliculas: [],
  count: 0,
};

function CartReducer(state, action) {
  const state_copy = Object.assign({}, state);
  console.log("Inside reducer, state:\n");
  console.log(state_copy);
  switch (action.type) {
    case "ADD_ITEMS":
      state_copy.peliculas.push(action.payload.pelicula);
      state_copy.count += action.payload.count;

      return {
        ...state_copy,
      };

    default:
      break;
  }
}

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  function addCount(count, pelicula) {
  
    dispatch({
      type: "ADD_ITEMS",
      payload: { pelicula, count },
    });
    console.log(state);
  }

  return (
    <CartContext.Provider
      value={{
        count: state.count,
        peliculas: state.peliculas,
        addCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
