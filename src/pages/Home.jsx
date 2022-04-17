import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Hero from '../parts/Hero';
import HeroMovies from '../parts/Hero - Movies';
import HeroCategories from '../parts/Home - Categories';
import EntertainmentContext from '../context/MovieContext';

const { EntertainmentProvider } = EntertainmentContext;

export default function Home() {
  return (
    <HelmetProvider>
      <EntertainmentProvider>
        <Helmet>
          <title>Home | MovieNesia</title>
        </Helmet>
        <Hero />
        <HeroCategories />
        <HeroMovies />
      </EntertainmentProvider>
    </HelmetProvider>
  );
}
