import React from 'react'
import Item from '../Item/Item'
import { peliculas } from '../../mock'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const ItemListContainer = () => {
  const [item, setItem] = useState(peliculas);
    const {id} = useParams();

    const FilterCategory = new Promise((resolve, reject)=>{
        
        if(id){
            setTimeout(()=>{
                const newPelicula = peliculas.filter((p)=> p.category == id)
                resolve(newPelicula);
            },500)
        } else {
            resolve(peliculas);
        }  

    })

    useEffect(()=>{
        FilterCategory.then((response)=>{
            setItem(response)
      })
},[id])
  return (
    <div>
        {
            item.map((pelicula)=>{
                return <Item pelicula={pelicula}/>
            })
        }
 </div>
)}

export default ItemListContainer