
import React from "react";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Aircraft from "../Pages/Aircraft";
import People from "../Pages/People";
import Services from "../Pages/Services";

import { Routes, Route, useLocation } from 'react-router-dom'

function AnimRoutes() {
    return (
    <Routes>
        <Route path='/DROHbl4' element={<Home />} />
        <Route path='/aircraft' element={<Aircraft />} />
        <Route path='/people' element={<People />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
    </Routes>
       
    ) 
    
  }
  
  export default AnimRoutes;