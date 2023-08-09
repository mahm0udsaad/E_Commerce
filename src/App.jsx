import React ,{useState,useContext, useEffect}from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import ProductListing from '../components/ProductListing';
import ProductDetail from '../components/ProductDetail';
import CartDetail from '../components/CartDetail';
function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path='/cartDetails' element={<CartDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
