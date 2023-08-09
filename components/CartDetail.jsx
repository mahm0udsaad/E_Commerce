import React, { useContext ,useEffect ,useState} from 'react';
import './style/cart.css'; 
import { Cart } from '../src/context/cart';
import NavBar from './navBar';

const CartDetail = () => {
  const [uniqueItems, setuniqueItems] = useState([]);
  const [total,setTotal]= useState(0)
  const { cartItems , setCartItems } = useContext(Cart)
  const arrow = '\u2190';

  useEffect(() => {
    setTotal(cartItems && cartItems.reduce((total, item) => total + item.price * item.quantity, 0));
      
  }, [cartItems]);
  
  const addOne = (id) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id == id ? { ...item, quantity: item.quantity + 1 } : item))
    );
  };
  const removeOne = (id) => {
    setCartItems((prev) =>
    prev.map((item) => (item.id == id ? { ...item, quantity: item.quantity - 1 } : item))
  );
  setCartItems((prev)=> prev.map(item => item.quantity > 0 ? item : null).filter(Boolean))
  };
  
  return (
    <>
     <NavBar  logo={arrow}/>
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <ul>
      {cartItems && cartItems.map((item) => (
      <li key={!item.id ? item.id * 0.5 : item.id}>
        <img src={item.image} /> 
          <div className="info-section">
          <p>{item.title}</p>
        <span>${item.price*item.quantity}</span>
        </div>
        <div className="quantity-section">
          <button onClick={() => removeOne(item.id)} className="minus-btn">-</button>
          <span>{item.quantity}</span>
          <button onClick={() => addOne(item.id)} className="plus-btn">+</button>
          </div>
      </li>
    ))}
      </ul>
      <div className="total">Total: ${total}</div>
      <button className="checkout-btn">Checkout</button>
    </div>
    </>
  );
};

export default CartDetail;
