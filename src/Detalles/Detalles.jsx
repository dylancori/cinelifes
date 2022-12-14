
import { useParams } from 'react-router-dom'

const Detalles = () => {
    const{idpelicula} = useParams();
    
  return (
    <div>
        <h1>Detalle de la pelicula{idpelicula}</h1>
        <img width={100} height={100} src="https://occ-0-1700-3934.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABf-VAClK8AZHSM6My9pQAoLyFPwOuK-OhO-wBuyfk9cajZtTPAte2lp_0FZVzTqp_IfmA4r3lnZ-g_Lnu4JqI6v6rVUAuyW0vFM.webp?r=188" /> 
        <h3>detalles de pelicula</h3>
    </div>
  )
}

export default Detalles;