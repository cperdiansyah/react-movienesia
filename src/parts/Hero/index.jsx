import React from 'react';
import Button from '../../components/Button';
import backdrop from '../../assets/image/backdrop/Movie Night-bro.svg';

import './hero.scss';

export default function Hero() {
  return (
    <section className="pt-12 relative h-[700px]">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="w-full md:w-1/2 relative">
            <h3 className="welcome-sign text-lg text-slate-800 font-medium flex items-center ">
              Welcome
            </h3>
            <h4 className="text-5xl font-bold leading-tight mt-3 text-slate-800">
              Explore millions of movies and TV shows
            </h4>
            <p className="text-lg mt-5 mb-8 ">
              You can still enjoy the latest movies and other movies online and
              at a lower price
            </p>
            <Button
              type="link"
              href="#discover"
              className="px-3 py-4 bg-primary text-white rounded-lg shadow-lg text-lg font-semibold"
            >
              Get Started
            </Button>
          </div>
          <div className="w-full md:w-1/2">
            <img className="w-full " src={backdrop} alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
}
