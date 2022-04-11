/* eslint-disable import/no-unresolved */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Header from 'parts/Header';
import Footer from 'parts/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
