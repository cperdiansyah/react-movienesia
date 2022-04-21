import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

import MovieDetailContext from '../context/MovieDetailContext';
import MovieDetailsMain from '../parts/Movie Detail - Main';

const { MovieDetailProvider } = MovieDetailContext;

export default function MovieDetail() {
  return (
    <HelmetProvider>
      <MovieDetailProvider>
        <MovieDetailsMain  />
      </MovieDetailProvider>
    </HelmetProvider>
  );
}
