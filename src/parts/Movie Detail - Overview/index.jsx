import React, { useEffect, useContext, useState } from 'react';
import MovieDetailContext from '../../context/MovieDetailContext';

import './overview.scss';

const { MovieDetails } = MovieDetailContext;

export default function MovieDetailOverview() {
  const { detail, setDetails } = useContext(MovieDetails);
  console.log(detail);
  return (
    <section className="py-12 mt-5">
      {detail && (
        <div className="container">
          <div className="content-wrapper flex">
            <div className="movie-details-content-overview  w-2/3">
              <h2 className="text-2xl font-bold  text-dark drop-shadow-md dark:text-text_primary_dark">
                Synopsis
              </h2>
              <p className="max-w-xl mt-3 text-lg font-normal text-dark drop-shadow-md dark:text-text_primary_dark">
                {detail.overview}
              </p>
            </div>

            <div className="w-1/3">
              <div className="cast-wrapper">
                <h2 className="text-2xl font-semibold dark:text-text_primary_dark ">
                  Cast
                </h2>
                <div className="cast-list">
                  <h1>cast list</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
