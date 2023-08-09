import React ,{useState,useContext, useEffect}from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import ProductListing from '../components/ProductListing';
import ProductDetail from '../components/ProductDetail';
import NavBar from '../components/navBar';
import { Cart } from './context/cart';
import CartDetail from '../components/CartDetail';
function App() {
  const [products , setProducts] = useState([])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProductListing products={products}/>} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path='/cartDetails' element={<CartDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
