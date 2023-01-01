
export function CartReducer(state,action){

    const listaPelicula = [];
    switch (action.type) {
        case "ADD_ITEMS":
        
          if(state.pelicula.length > 0){
            listaPelicula.push(state.peliculas);
            }

            return{
                ...state,
                count:action.payload.count,
                pelicula:[action.payload.pelicula],
                listaPelicula:listaPelicula
            } 
  
        default:
            break;
    }
}