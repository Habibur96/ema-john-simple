
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Shop from './component/Header/Shop/Shop';
import Orders from './component/Orders/Orders';
import Inventory from './component/Inventory/Inventory';
import About from './component/About/About';
import Login from './component/Login/Login';
import SignUp from './component/SignUp/SignUp';

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
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/SignUp' element={<SignUp></SignUp>}></Route>

      </Routes>

    </div>
  );
}

export default App;
