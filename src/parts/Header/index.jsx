/* eslint-disable react/no-array-index-key */
import React from 'react';
import { NavLink } from 'react-router-dom';
import Brand from '../../components/Brand';
import ToogleDarkmode from '../../components/ToogleDrakmode';
import './header.scss';

export default function Header(props) {
  const className = [props.className];

  const navLinks = ['Home', 'Categories', 'Favorites', 'About'];

  return (
    <header
      className={`bg-transparent absolute top-0 left-0 w-full flex items-center z-10 py-6  ${className.join(
        ' '
      )}`}
    >
      <div className="container flex flex-row justify-between items-center">
        <Brand isFull className="w-1/2 " />
        <div className="nav-wrap flex items-center w-1/2 justify-end">
          <nav className="mr-5">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                
                className="nav-link font-medium text-lg text-slate-500 ml-3 dark:text-slate-200 inline-block px-3 py-3"
              >
                {link}
              </NavLink>
            ))}
          </nav>
          <ToogleDarkmode />
        </div>
      </div>
    </header>
  );
}
