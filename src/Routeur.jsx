import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import Service from './Page/Service';
import Error from './Page/Error';
import Header from './component/header/Header';

const Routeur = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Service/:id' element={<Service />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routeur;