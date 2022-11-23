import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/NavBar/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
function App() {
  return (
    <div className='app'>
    <NavBar/>
    <CartWidget />
    <ItemListContainer name='dylan'/>
    </div>
  )
}

export default App;
