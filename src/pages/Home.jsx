import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Hero from '../parts/Hero';
import Categories from '../parts/Home - Categories';

export default function Home() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home | MovieNesia</title>
      </Helmet>
      <Hero />
      <Categories />
    </HelmetProvider>
  );
}
