import React, { useContext } from 'react';
import Button from '../../components/Button';
import EntertainmentContext from '../../context/MovieContext';
import './hero.scss';

const { Entertainment } = EntertainmentContext;

export default function HeroMovies() {
  const props = useContext(Entertainment);
  console.log(props);
  return (
    <section className="hero-movies py-36">
      <div className="container">
        <div className="title-wrapper">
          <h1
            className="capitalize text-5xl font-bold text-text_primary leading-tight 
          dark:text-text_primary_dark"
          >
            The Most Popular
            <span className="block ">
              {props.entertainment} To Watch In {new Date().getFullYear()}{' '}
            </span>
          </h1>
        </div>
        <div className="button-wrapper mt-5">
          <div className="type-entertainment-wrapper">
            <Button className="active mr-3">Movies</Button>
            <Button className="ml-2">TV Shows</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
