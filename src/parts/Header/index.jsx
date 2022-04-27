/* eslint-disable react/no-array-index-key */
import React, { useContext, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Brand from '../../components/Brand';
import SearchForm from '../../components/Search Form';
import ToogleDarkmode from '../../components/ToogleDrakmode';
import './header.scss';

export default function Header(props) {
  const className = [props.className];

  const navLinks = ['Home', 'Categories', 'Favorites'];
  const hamburgerButton = useRef(null);
  const navMenu = useRef(null);

  const toogleNav = () => {
    const hamburger = hamburgerButton.current;
    const nav = navMenu.current;
    hamburger.classList.toggle('hamburger-active');
    nav.classList.toggle('hidden');
  };

  return (
    <header
      className={`bg-slate-100 bg-opacity-80 backdrop-blur-sm dark:bg-opacity-90  dark:bg-dark absolute top-0 left-0 w-full flex items-center z-10 py-6  ${className.join(
        ' '
      )}`}
    >
      <div className="container flex flex-row justify-between items-center relative">
        <div className="brand-wrapper w-1/2 md:w-1/3">
          <Brand isFull className="w-1/2 md:w-1/3 " />
        </div>

        <div className="nav-wrap flex items-center w-1/2 md:w-2/3 justify-end">
          <button
            id="hamburger"
            name="hamburger"
            type="button"
            className="block absolute right-4
            
            

            lg:hidden"
            ref={hamburgerButton}
            onClick={toogleNav}
          >
            <span className="hamburger-line transition duration-300 ease-in-out origin-top-right" />
            <span className="hamburger-line transition duration-300 ease-in-out" />
            <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-right" />
          </button>

          <div
            ref={navMenu}
            className="
          
          hidden absolute py-5 dark:bg-slate-600 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none
          "
          >
            <div className="navigation-wrapper flex flex-col-reverse lg:items-center lg:justify-end lg:flex-row ">
              <nav className="lg:mr-5">
                {navLinks.map((link, index) => (
                  <NavLink
                    key={index}
                    ref={navMenu}
                    to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="
                    
                
                nav-link font-medium text-lg text-slate-500 ml-3 dark:text-slate-200 inline-block px-3 py-3 w-full lg:w-fit"
                  >
                    {link}
                  </NavLink>
                ))}
              </nav>
              <SearchForm className="lg:w-1/3 mx-3 mb-3" />
              <ToogleDarkmode className="ml-auto lg:ml-0 mr-3 mb-4" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
