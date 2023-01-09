export function CartReducer(state, action) {
  const listaPelicula = [];
  let count = 0;
  switch (action.type) {
    case "ADD_ITEMS":
      if (state.pelicula.length > 0) {
        listaPelicula.push(action.payload);
      }

      count += action.payload.count
      return {
        ...state,
        // count: action.payload.count,
        // count,
        count: listaPelicula.length(),
        pelicula: [action.payload.pelicula],
        listaPelicula: listaPelicula,
      };

    default:
      break;
  }
}
