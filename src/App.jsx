/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Header from './parts/Header';
import Footer from './parts/Footer';
import ThemeContext from './context/ThemeContext';

const { ThemeProvider } = ThemeContext;
function App() {
  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC

    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });
  return (
    <div className="App">
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
