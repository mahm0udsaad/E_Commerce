import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './style/ProductDetail.css';
import { Cart } from '../src/context/cart';
import Modal from './modal';
import NavBar from './navBar';

function ProductDetail() {
  const [product , setProduct] = useState()
  const { productId } = useParams();
  const {cartItems,setCartItems} = useContext(Cart)
  const [modalOpen , setModalOpen] =useState(false)
  const arrow = '\u2190';
  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then(res =>setProduct(res.data))
      .catch(err => console.log(err))
  },[])

  if (!product) {
    return <div>Loading...</div>;
  }
  const addToCart = (id) => {
    setCartItems(cartItems.filter(item => item !== null))
    const itemExists = cartItems.some(item => item.id == id)
    if (itemExists) {
    }
  
    const productToAdd = cartItems.find(product => product.id == id);
  
    if (!productToAdd) {
      setCartItems(prev => [...prev, { ...product, quantity: 1 }]);
    } else {
      openModal()
    }
  };

  const stars = []
  const rating = (star) => {
     const full = 5;
     const current = star.rating.rate;
     const decimal = current - Math.floor(current) || 0;
     const num = Math.round(decimal)
     for (let i = 1; i <= full; i++) {
     if(i <= current){
      stars.push({key:i , class:'star'})
      }else if(i ==  Math.floor(current+num)){
        stars.push({key:i , class:'half-star'})
      }else{
        stars.push({key:i , class:'empty-star'})
      } 
    }
  };
  const openModal = () => {
     setModalOpen(true)
  };
  const closeModal = () => {
     setModalOpen(false)
  };
  rating(product)
  return (
    <>
    <NavBar logo={arrow} />
    <div className="product-detail">
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <h1>you have already add it to your cart</h1>
        <p>you can add more quantites in your cart</p>
      </Modal>
      <div className="upper-section">
      <img src={product.image} alt={product.name} />
      <div className="function-section">
        <div className="btns">
        <button onClick={()=>addToCart(product.id)} className='addToCartBtn'>Add To Cart</button>
          <div className="rate">
           {stars && stars.map(star => <span key={star.key} className={star.class}>&#9733;</span>)}
          </div>
        </div>
      </div>
      </div>
      <span>{product.category}</span>
      <h1>{product.title}</h1>
      <p className='price'>${product.price}</p>
      <p>{product.description}</p>
    </div>
    </>
  );
}

export default ProductDetail;
