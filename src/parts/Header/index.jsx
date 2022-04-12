/* eslint-disable react/no-array-index-key */
import React from 'react';
import { NavLink } from 'react-router-dom';
import Brand from '../../components/Brand';
import ToogleDarkmode from '../../components/ToogleDrakmode';
import './header.scss';

export default function Header(props) {
  const className = [props.className];

  const navLinks = ['Home', 'Genre', 'Favorites', 'About'];

  return (
    <header
      className={`bg-transparent absolute top-0 left-0 w-full flex items-center z-10 py-6  ${className.join(
        ' '
      )}`}
    >
      <div className="container flex flex-row justify-between items-center">
        <Brand isFull />
        <div className="nav-wrap flex items-center">
          <nav className="mr-5">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                className="nav-link font-medium text-lg text-slate-400 ml-3 "
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
