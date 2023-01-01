import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'
import { peliculas } from '../../mock';

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const {id} = useParams();

  const oneItem = new Promise((resolve)=>{
    
          setTimeout(()=>{
              const onePelicula = peliculas.find((p)=> p.id === parseInt(id) )
              resolve(onePelicula);
          },500)
  })

  useEffect(()=>{
      oneItem.then((response)=>{
          setItem(response)
        })
      },[id])
      return (
      <ItemDetail pelicula={item}/>
      )
      }
      
      export default ItemDetailContainer

      // const ItemDetailContainer = () => {

      //   const [filtroProducto, setFiltroProducto] = useState({});
      //   const [busquedaProducto, setBusquedaProducto] = useState(true)
      //   const { productosid } = useParams()
      
      //   useEffect(() => {
      //     const querydb = getFirestore();
      //     const queryDoc = doc(querydb, 'productos', productosid)
      //     getDoc(queryDoc)
      //       .then(res => !res.exists() ? setBusquedaProducto(false) : setFiltroProducto({ id: res.id, ...res.data() }))
      
      //   }, [])
      
      //   if (busquedaProducto === false) {
      //     return (
      //       <>
      //         <ErrorProducto />
      //       </>
      //     )
      //   } else {
      //     return (
      //       <ItemDetail filtroProducto={filtroProducto} />
      //     )
      //   }
      // }
      // export default ItemDetailContainer
      