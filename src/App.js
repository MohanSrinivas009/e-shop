import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Cart from "./Cart";
import {
  BrowserRouter as Navigation,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Signin from "./Signin";
import Orders from "./Orders";
import Prime from "./Prime";
import Profile from "./Profile";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* HEADER */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* HOME-COMPONENT */}
          <Route path="Cart" element={<Cart />} />
          {/* Cart-COMPONENT */}
          <Route path="signin" element={<Signin />} />
          {/* Signin-COMPONENT */}
          <Route path="profile" element={<Profile />} />
          {/* Signin-COMPONENT */}
          <Route path="signin" element={<Orders />} />
          {/* Orders-COMPONENT */}
          <Route path="signin" element={<Prime />} />
          {/* Prime-COMPONENT */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
