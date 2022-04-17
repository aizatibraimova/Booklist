import React from "react";
import {
  BrowserRouter as Router, 
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from "./About";
import BestBooks from "./BestBooks";
import Home from "./Home";
import "./App.css";

function App(){
  return(
    <Router>
      <nav>
        <Link to="/" className="link">Home</Link>
        <Link to="/about" className="link">Blog</Link>
        <Link to="/bestSellers" className="link">Best Sellers</Link>
      </nav>

      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/bestSellers" element={<BestBooks />}/>
      </Routes>


    </Router>
  )
}
export default App;
