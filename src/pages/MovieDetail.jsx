import React from 'react';

import MovieDetailContext from '../context/MovieDetailContext';
import MovieDetailsMain from '../parts/Movie Detail - Main';
import MovieDetailOverview from '../parts/Movie Detail - Overview';

const { MovieDetailProvider } = MovieDetailContext;

export default function MovieDetail() {
  return (
    <MovieDetailProvider>
      <MovieDetailsMain />
      <MovieDetailOverview />
    </MovieDetailProvider>
  );
}
