import { useContext } from 'react';
// import { useParams } from 'react-router-dom'
import ItemCount from '../ItemCount/Count';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({pelicula})  => {
    // const{idpelicula} = useParams();
    console.log("Película")
    console.log(pelicula)

    const {addCount} = useContext(CartContext)
    const handlerAddCount = (count) =>{
      addCount(count,{...pelicula, count})
    }
    
  return (
    <div>
        <h3>detalles de pelicula</h3>
        <img src={pelicula.img} width={300} heigth={300} alt="" />
        <h3>{pelicula.detalles}</h3>
        <ItemCount onChangeCount={(e)=>handlerAddCount(e)}/>
    </div>
  )
}


export default ItemDetail