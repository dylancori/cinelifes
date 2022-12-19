import { useParams } from 'react-router-dom'
import { peliculas } from '../../mock';



const ItemDetail = () => {
    const{idpelicula} = useParams();
    
  return (
    <div>
      
        <h3>detalles de pelicula</h3>
        <h3>{peliculas.detalles}</h3>
        
    </div>
  )
}

export default ItemDetail