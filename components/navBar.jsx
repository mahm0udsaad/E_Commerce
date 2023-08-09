import React, { useContext, useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import './style/navBar.css'
import { Cart } from "../src/context/cart";

const categories = ["All", "electronics", "jewelery", "men's clothing", "women's clothing"];

const NavBar = ({ handleSendCategoryToApp , logo  }) => { 
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { numOfItems } = useContext(Cart)

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    handleSendCategoryToApp(category);
  };


  return (
    <nav className="navbar">
      <Link to={'/'} className="logo">{logo}</Link>

      <div className="category">
        <select value={selectedCategory} onChange={(e) => handleCategoryChange(e.target.value)}>
        <option disabled value="">Categories</option>
          {categories.map((item) => <option key={item.length} value={item}>{item}</option>)}
        </select>
      </div>
      <div className="cartBtnContainer">
      {numOfItems == 0 ? <span style={{display:'none'}}>{numOfItems}</span> : <span>{numOfItems}</span>}
      <Link to={'/cartDetails'} className="cart">Cart</Link>
      </div>
    </nav>
  );
};

export default NavBar;
