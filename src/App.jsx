/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Header from './parts/Header';
import Footer from './parts/Footer';
import ThemeContext from './context/ThemeContext';

const { ThemeProvider } = ThemeContext;
function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* <Footer /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
