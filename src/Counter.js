import React,{useState} from 'react'

function Counter() {
    const [counter,setCounter]=useState(1)
    const increase=(e)=>{
        e.preventDefault();
        setCounter(counter+1)
    }
    const decrease=(e)=>{
        e.preventDefault();
        if(counter>1)
            setCounter(counter - 1);
    }
  return (
    <div>
      <p>Qty</p>
      <div>
        <button className="decrease" onClick={decrease}>
          -
        </button>
        {counter}
        <button className="increase" onClick={increase}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter