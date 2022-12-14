import { Link } from "react-router-dom"
const Peliculas = () => {
  const peliculas =[
    {
      id:'1',
      nombre:'terror'
    },
    {
      id:'2',
      nombre:'comedia'
    },
    {
      id:'3',
      nombre:'accion'
    }
  ]
  return(
    <div>
      <h1>peliculas</h1>
      {
        peliculas.map((pelicula)=>{
            return <div> <Link to={`/Detallespelicula/${pelicula.id}`}>{pelicula.nombre}</Link>    </div>

        })
      }
    
    </div>
  )
}
export default Peliculas