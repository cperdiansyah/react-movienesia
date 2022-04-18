import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Hero from '../parts/Hero';
import HeroMovies from '../parts/Hero - Movies';
import HeroCategories from '../parts/Home - Categories';
import ContentHomeContext from '../context/MovieContext';

const { ContentProvider } = ContentHomeContext;

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
