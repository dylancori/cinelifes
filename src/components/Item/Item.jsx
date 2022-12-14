
import { Link } from 'react-router-dom'

const Item = ({pelicula}) => {
    return (
        <div>
            <div>
                <img src={pelicula.img} width={100} height={100} alt='imagen de productos'/>
                <div>
                    <h3>{pelicula.name}</h3>
                    <Link to={`/item/${pelicula.id}`}><button className='detalle__btn'>Ver Detalle</button></Link>
                </div>
            </div>
    </div>
    )
}
export default Item