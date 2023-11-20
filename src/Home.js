import React from 'react'
import './Home.css'
import img1 from './images/amazon-great-indian-festival-sale-II-2019.webp'
import img2 from './images/5314303.jpg'
import img3 from './images/sl_042921_42480_112.jpg'
import Product from './Product'

function Home() {
    
  return (
    <div className="home">
      <div className="home_container">
        <div className="offers scroller">
          <img className="banner" src={img1} alt="" />
          <img className="banner" src={img2} alt="" />
          <img className="banner" src={img3} alt="" />
        </div>
      </div>
       <Product/>
    </div>
  );
}

export default Home