import {React,useState,useEffect} from 'react'
import './product.css'
import axios from'axios'
import { useDispatch } from "react-redux";
import { addToCart } from './store/cartSlice';
import Counter from './Counter';
function Product() {
  const dispatch=useDispatch()
  const [items,setItems]=useState([])
  
  console.log(items);
  return (
    <div className="product_row1">
      {useEffect(() => {
        axios({
          method: "GET",
          url: "https://api.escuelajs.co/api/v1/products",
        })
          .then((res) => {
            setItems(res.data);
          })
          .catch((e) => console.log(e));
      }, [])}
      {items.map((element) => {
        return (
          <div className="product">
            <div className="productInfo">
              <strong>{element.title}</strong>
              {/* <p>Rating {element.rating.rate}</p> */}
              <br />
              <strong>₹{element.price}</strong>
            </div>

            <img
              className="productImg"
              src={element.images[0]}
              alt="not found"
            />
            <Counter passToParent={this} />
            <button
              className="cartbtn"
              onClick={
                ((e) => {
                  e.preventDefault();
                  dispatch(addToCart(element));
                })
              }
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Product