
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartWidget from './components/CartWidget/CartWidget'

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar'
import { generos, menus} from './mock';


function App() {
  
return (
  <BrowserRouter className='App'>
      <NavBar menus={menus} generos={generos} />

      <Routes>
        <Route exact path='/' element={<ItemListContainer/>} />
        <Route exact path='/generos/:id' element={<ItemListContainer/>} />
        <Route exact path='/Item/:id' element={<ItemDetailContainer/>}/>
       
      </Routes>
  </BrowserRouter >
  
);

}

export default App;
