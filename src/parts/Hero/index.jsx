import React from 'react';
import Button from '../../components/Button';
import backdrop from '../../assets/image/backdrop/Movie Night-bro.svg';

import './hero.scss';

export default function Hero() {
  return (
    <section className="hero-section pt-7 relative ">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="w-full md:w-1/2 relative">
            <h3 className="welcome-sign text-lg text-gray-500 dark:text-gray-200 font-medium flex items-center ">
              Welcome
            </h3>
            <h4 className="text-5xl font-bold leading-tight mt-3 text-text_primary dark:text-text_primary_dark">
              Explore millions of movies and TV shows
            </h4>
            <p className="text-lg mt-5 mb-10 text-text_secondary dark:text-text_secondary_dark ">
              You can still enjoy the latest movies and other movies online and
              at a lower price
            </p>
            <Button
              type="link"
              href="#discover"
              isExternal
              className="px-3 py-4 rounded-md shadow-lg text-lg font-semibold 
              bg-primary text-white hover:bg-indigo-400 active:bg-indigo-600
              dark:bg-slate-200 dark:text-slate-800 dark:hover:bg-slate-100 dark:active:bg-slate-300"
            >
              Discover Now
            </Button>
          </div>
          <div className="w-full md:w-1/2">
            <img className="w-full " src={backdrop} alt="Hero" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
