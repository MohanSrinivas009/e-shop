import React,{useEffect} from 'react'
import './Header.css';
import amazon from'./images/pngimg.com - amazon_PNG11.png'
import search from './images/pngfind.com-magnifying-glass-png-593293.png'
import cart from './images/shopping-cart-icon-product-return-shopping-cart-png-32c2d621f780db39d4b1170c31bd1a1e.png'
import { NavLink} from "react-router-dom";
import {useSelector}from "react-redux"
import { auth } from "./firebase";

function Header() {
  const cartItems=useSelector(state=>state.cart)
  const logUsers=useSelector(state=>state.Login)
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log(authUser.email)
    })
  },[])
  return (
    <div className="header">
      <NavLink to="/">
        <img className="logo" src={amazon} alt="" />
      </NavLink>
      <div className="header_search" alt="">
        <input type="text" />
        <img className="search_icon" src={search} alt="" />
      </div>
      <div className="Header_nav">
          {logUsers.length === 0 ? (
            <NavLink to="/signin">
            <div className="user_signin">
              <span>Sign In</span>
            </div></NavLink>
          ) : (
            <NavLink to="/profile">
            <div className="user_signin">
              <span>Profile</span>
            </div></NavLink>
          )}
        
        <NavLink to="orders">
          <div className="user_order">
            <span>Orders</span>
          </div>
        </NavLink>
        <NavLink to="prime">
          <div className="user_prime">
            <span>Prime</span>
          </div>
        </NavLink>
      </div>
      <NavLink to="Cart">
        <div className="user_cart">
          <img className="cart_icon" src={cart} alt="" />
          <span>{cartItems.length}</span>
        </div>
      </NavLink>
    </div>
  );
}

export default Header