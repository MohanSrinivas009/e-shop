import React from "react";
import "./Subtotal.css";
function Subtotal(props) {
  return (
    <div className="Subtotal">
      <h2>
        Sub Total({props.totalItems} Items): <p>₹{props.total}</p>
      </h2>
    </div>
  );
}

export default Subtotal;
