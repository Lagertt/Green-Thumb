import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import Delivery from './pages/Delivery.jsx';
import Contacts from './pages/Contacts.jsx';
import Basket from './pages/Basket.jsx';
import News from './pages/News.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/delivery" element={<Delivery />} />

        {/* <Route path="/" element={<Navigate to="/home" />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
