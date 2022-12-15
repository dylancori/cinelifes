import { useParams } from 'react-router-dom'


const ItemDetail = () => {
    const{idpelicula} = useParams();
    
  return (
    <div>
        
       
        <h3>detalles de pelicula</h3>
    </div>
  )
}

export default ItemDetail