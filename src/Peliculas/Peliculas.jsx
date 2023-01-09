import { Link } from "react-router-dom"
const Peliculas = () => {
  const generos =[
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
        generos.map((genero)=>{
            return <div> <Link to={`/Detallesgenero/${genero.id}`}>{genero.nombre}</Link> </div>

        })
      }
    
    </div>
  )
}
export default Peliculas