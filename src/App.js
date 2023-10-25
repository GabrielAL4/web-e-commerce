import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import { Shop } from './Pages/Shop';
function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/masculino' element={<ShopCategory category='masculino'/>}/>
        <Route path='/feminino' element={<ShopCategory category='feminino'/>}/>
        <Route path='/infantil' element={<ShopCategory category='infantil'/>}/>
        <Route path='product' element={<Product/>}>
          <Route path='productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
