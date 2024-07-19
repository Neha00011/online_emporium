import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Products from "./Components/Products";
import Error from "./Components/Error";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Product from "./Components/Product";
import Estate from "./Context/Estate";
import FilterState from "./Context/FilterState";
import Cartstate from "./Context/Cartstate";
import Login from "./Components/Login";

function App() {
  return (
    <Estate>
      <FilterState>
        <Cartstate>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:paramid" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path='/login' element={<Login/>}/>
              <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
          </Router>
        </Cartstate>
      </FilterState>
    </Estate>
  );
}

export default App;
