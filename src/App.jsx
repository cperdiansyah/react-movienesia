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
import ScrollToTop from './helpers/ScrollToTop';
import Favorites from './pages/Favorites';
import Discover from './pages/Discover';

import SearchContext from './context/SearchContext';

const { SearchProvider } = SearchContext;

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
      <SearchProvider>
        <div className="App bg-slate-100 dark:bg-dark z-10">
          <Header />
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="categories" element={<Categories />} />
              <Route path="favorites" element={<Favorites />} />

              <Route path="movie/:id" element={<MovieDetail />} />

              <Route path="discover" element={<Discover />}>
                <Route path="discover/:query" element={<Discover />} />
                <Route
                  path="discover/categories/:query"
                  element={<Discover />}
                />
              </Route>
            </Routes>
          </ScrollToTop>

          <Footer />
        </div>
      </SearchProvider>
    </ThemeProvider>
  );
}

export default App;
