import React from 'react'
import cart from './images/banner.jpg'
import './Cart.css'
import Subtotal from './Subtotal';
import {useSelector} from 'react-redux'
import{useDispatch} from'react-redux'
import { removeFromCart } from './store/cartSlice';

function Cart() {
  let cartItems=useSelector(state=>state.cart)
  const dispatch=useDispatch()
  
  let total=0
  cartItems.forEach(item => {
    total+=parseInt(item.item.price)
  });
  return (
    <div className="Cart">
      <div className="cartLeft">
        <img className="cartImg" src={cart} alt=''/>
        <div>
          <h1>Your Cart</h1>
          <div>
            {cartItems.map((item)=>{
              return (
                <div className="product">
                  <div className="productInfo">
                    <strong>{item.item.title}</strong>
                    <br />
                    <strong>₹{item.item.price}</strong>
                  </div>
                  <img
                    className="productImg"
                    src={item.item.images[0]}
                    alt=""
                  />
                  <button
                    className="cartbtn"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(removeFromCart(item.key));
                    }}
                  >
                    Remove
                  </button>
                </div>
              );
            }
            )}
          </div>
        </div>
      </div>
      <div className='cartRight'>
        <Subtotal total={total} totalItems={cartItems.length}/>
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default Cart