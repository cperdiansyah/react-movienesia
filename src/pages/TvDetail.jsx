import React from 'react';

import MovieDetailContext from '../context/MovieDetailContext';
import TVDetailsMain from '../parts/TV Detail - Main';
import TVDetailOverview from '../parts/TV Detail - Overview';

const { MovieDetailProvider } = MovieDetailContext;

export default function TvDetail() {
  return (
    <MovieDetailProvider>
      <TVDetailsMain />
      <TVDetailOverview />
    </MovieDetailProvider>
  );
}
