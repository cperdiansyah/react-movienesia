import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Hero from '../parts/Home - Hero';
import HeroMovies from '../parts/Home - Movies';
import HeroCategories from '../parts/Home - Categories';
import ContentHomeContext from '../context/MovieContext';

const { ContentProvider } = ContentHomeContext;
// console.log('Home');
export default function Home() {
  return (
    <HelmetProvider>
      <ContentProvider>
        <Helmet>
          <title>Home | MovieNesia</title>
        </Helmet>
        <Hero />
        <HeroCategories />
        <HeroMovies />
      </ContentProvider>
    </HelmetProvider>
  );
}
