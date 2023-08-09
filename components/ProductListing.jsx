import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style/ProductListing.css';
import NavBar from './navBar';

function ProductListing({products}) {
  return (
    <div className="product-listing">
     <NavBar  logo={'E Shop'}/>
      <h1>Product Listing</h1>
      <div className="products">
        {products.map((product) => (
          <div  key={product.id} className="product-container">
            <div className="product-card">
              <div className="img-container">
            <img src={product.image} alt={product.name} />
              </div>
             <div className="cardDscription">
             <h3>{product.title}</h3>
            <span>{product.category}</span>
            <p>${product.price}</p>
            <Link to={`/products/${product.id}`}>View Details</Link>
             </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListing;
