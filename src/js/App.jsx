import Home from './Home/Home';
import { useState } from 'react'
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from "react-router-dom";
import './App.css'
import { StoreProvider } from './StoreContext'; 
import Navbar from './Navbar/Navbar';
import Create from './Create/Create';
import Search from './Search/Search';

const App = () => {
  return (
    
       <StoreProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create/>} />
            <Route path="/search" element={<Search/>} />
          </Routes>
        </Router>

       </StoreProvider>
    
    
  )
}

export default App
