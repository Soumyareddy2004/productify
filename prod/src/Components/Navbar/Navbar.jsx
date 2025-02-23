import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/productify.jpg';
import cart_icon from '../Assets/cart_icon.png';
import nav_dropdown from '../Assets/nav_dropdown.png';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem('token') // Check if the token exists in localStorage
  );
  const menuRef = useRef();
  const navigate = useNavigate();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token on logout
    setIsLoggedIn(false);
    navigate('/'); // Redirect to login page
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/shop" className="nav-logo">
          <img src={logo} alt="Productify Logo" />
          <p>PRODUCTIFY</p>
        </Link>

        <img onClick={dropdown_toggle} className="nav-dropdown" src={nav_dropdown} alt="Dropdown Icon" />

        <ul ref={menuRef} className="nav-menu">
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/mens">Men</Link>
          </li>
          <li>
            <Link to="/womens">Women</Link>
          </li>
          <li>
            <Link to="/kids">Kids</Link>
          </li>
          <li>
            <Link to="/stitch">StitchVastra</Link>
          </li>
        </ul>

        <div className="nav-login-cart">
          {isLoggedIn ? (
            <button onClick={handleLogout} className="nav-login-btn">
              Logout
            </button>
          ) : (
            <button onClick={() => navigate('/')} className="nav-login-btn">
              Login
            </button>
          )}
          <Link to="/cart" className="nav-cart">
            <img src={cart_icon} alt="Cart Icon" />
            <div className="nav-cart-count">{getTotalCartItems()}</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
