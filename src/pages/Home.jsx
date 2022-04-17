import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Hero from '../parts/Hero';
import HeroCategories from '../parts/Home - Categories';

export default function Home() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home | MovieNesia</title>
      </Helmet>
      <Hero />
      <HeroCategories />
    </HelmetProvider>
  );
}
