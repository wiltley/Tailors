import React from 'react';
import { Navbar } from './components/navbar/Navbar';
import {Main} from './pages/main/Main';
import { Experts } from './pages/experts/Experts'
import { Booking } from './pages/booking/Booking'
import { Contact } from './pages/contact/Contact'
import { useState } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";


import './common/Container.css';

export interface SetExpert {
    setExpert: Function;
}

function App() {

    const [expertName, setExpertName] = useState("-");

  return (
    <>
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="container">
          <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}> </Route>
                    <Route path="/experts" element={<Experts setExpert={setExpertName}/>}> </Route>
                    <Route path="/bookings" element={<Booking assistant={expertName}/>}> </Route>
                    <Route path="/contact" element={<Contact />}> </Route>
                </Routes>
          </BrowserRouter>
      </div>
    </>
  );
}

export default App;
