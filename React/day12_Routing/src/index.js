import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router';

import Home from "./Home";
import Dashboard from "./Dashboard";
import Contact from "./Contact"; 
import Details from "./Details";
import Zero from './Zero';
import Hi from './Hi';
import Hello from './Hello';

function App() {
  return (
    <BrowserRouter>
    <Link to="/">Home</Link>
     <Link to="/Contact">Contact</Link>
     <Link to="/Dashboard">Dashboard</Link>
     <Link to="Details" >Details</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/Details' element={<Details>  </Details>} >
        <Route index element={<Zero></Zero>}></Route>
        <Route path='Hello' element={<Hello></Hello>}></Route>
        <Route path='Hi ' element={<Hi></Hi>}></Route>

        </Route>
        
        
      </Routes>

      {/* footer */}
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
