/* eslint-disable import/no-unresolved */
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Header from './parts/Header';
import Footer from './parts/Footer';
import './App.css';

import ThemeContext from './context/ThemeContext';
import MovieDetail from './pages/MovieDetail';
import Categories from './pages/Categories';
import CategoriesLists from './pages/CategoriesLists';
import ScrollToTop from './helpers/ScrollToTop';

const { ThemeProvider } = ThemeContext;
function App() {
  window.onscroll = () => {
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
      <div className="App bg-slate-100 dark:bg-dark z-10" >
        <Header />
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="categories" element={<Categories />} />
            <Route path="categories/:id" element={<CategoriesLists />} />

            <Route path="movie/:id" element={<MovieDetail />} />
          </Routes>
        </ScrollToTop>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
