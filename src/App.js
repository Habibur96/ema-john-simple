
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Shop from './component/Header/Shop/Shop';
import Orders from './component/Orders/Orders';
import Inventory from './component/Inventory/Inventory';
import About from './component/About/About';
// import Product from './component/Product/Product';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>

        <Route path='/Shop' element={<Shop></Shop>}></Route>

        <Route path='/Orders' element={<Orders></Orders>}></Route>
        <Route path='/Inventory' element={<Inventory></Inventory>}></Route>

        <Route path='/About' element={<About></About>}></Route>

      </Routes>

    </div>
  );
}

export default App;
