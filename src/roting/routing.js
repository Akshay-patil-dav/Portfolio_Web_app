import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Outlet, Link } from "react-router-dom";
import Home from '../page/Home';
import About from '../page/About';
import Contact from '../page/Contact';
import Nopage from '../page/Nopage';
import Navbar from '../navbar/navbar';


const Routing = () => {
    return (
        <div>
            

       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
         </BrowserRouter>
        </div>
    );
}

export default Routing;
