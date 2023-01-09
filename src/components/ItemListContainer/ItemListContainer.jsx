import React from "react";
import Item from "../Item/Item";
import {collection, doc, getDoc, getDocs, getFirestore} from 'firebase/firestore';

import { peliculas } from "../../mock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  const FilterCategory = new Promise((resolve, reject) => {
    if (id) {
      setTimeout(() => {
        const newPeliculas = peliculas.filter((p) => p.category == id);
        resolve(newPeliculas);
      }, 500);
    } else {
      resolve(peliculas);
    }
  });

  useEffect(() => {
    FilterCategory.then((response) => {
      setItems(response);
    });
  }, [id]);

useEffect(() => {
  const db = getFirestore();
  const itemCollection = collection(db,"item")
  getDocs(itemCollection).then(snapshot =>{
   
      setItems(snapshot.docs.map(doc))
    
    
  })

}, [])


  return (
    <div className="pelis">
      {items.map((pelicula) => {
        return <Item pelicula={pelicula} />;
      })}
    </div>
  );
};

export default ItemListContainer;
