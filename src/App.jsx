
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar'
import { generos, menus} from './mock';
import CartFinish from './components/CartFinish/CartFinish';


function App() {
  
return (
  <BrowserRouter className='App'>
      <NavBar menus={menus} generos={generos} />

      <Routes>
        <Route exact path='/' element={<ItemListContainer/>} />
        <Route exact path='/generos/:id' element={<ItemListContainer/>} />
        <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route exact path='/CartWidget' element={<CartFinish/>} />
       
      </Routes>
  </BrowserRouter >
  
);

}

export default App;
