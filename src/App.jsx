/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Header from './parts/Header';
import Footer from './parts/Footer';
import ThemeContext from './context/ThemeContext';

const { ThemeProvider } = ThemeContext;
function App() {
  window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    // const toTop = document.querySelector('#to-top');

    if (window.pageYOffset > fixedNav) {
      header.classList.add('header-fixed');
      // toTop.classList.remove('hidden');
      // toTop.classList.add('flex');
    } else {
      header.classList.remove('header-fixed');
      //   toTop.classList.remove('flex');
      //   toTop.classList.add('hidden');
      // }
    }
  };
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
