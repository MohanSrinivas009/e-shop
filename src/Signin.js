import { signin } from "./store/userLoginSlice";
import React, { useState } from "react";
import "./Signin.css";
import {
  UserCredential,createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
function Signin() {
  const [input, setInput] = useState();
  const [password, setPassword] = useState();
  const [dialouge,setDialoge]=useState('')
  const dispatch=useDispatch()
  const navigate =useNavigate()
  const handle = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, input, password)
      .then((auth) => {
        dispatch(signin({input,password}))
        if(auth){
          navigate('/')
        }
      })
      .catch((error) => {
        setDialoge(error.code)
      });
  };
  const register =(e)=>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth, input, password)
      .then((UserCredential) => {
        console.log(UserCredential)
        sendEmailVerification(UserCredential.user );
        dispatch(signin({ input, password }));
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => {
        setDialoge(error.code);
      });
  }

  return (
    <div className="signIn">
      <div className="content">
        <h1>Sign In</h1>
        <p className="error">{dialouge}</p>
        <form onSubmit={handle}>
          <div>
            <label>
              Email or Phone Number
              <br />
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Password:
              <br />
              <input
                type="password"
                vlaue={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </div>
          <p>
            <input type="checkbox" required />
            By continuing, you agree to Amazon's{" "}
            <a className="alink" href="/">
              Conditions
            </a>
            of Use and{" "}
            <a className="alink" href="/">
              Privacy Notice
            </a>
            .
          </p>
          <button type="submit" onClick={signin}>
            Continue
          </button>
        </form>
        <div className="Register">
          <h5>New User</h5>
          <br />
          <button
            type="submit"
            style={{ backgroundColor: "grey", color: "white" }}
            onClick={register}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signin;
