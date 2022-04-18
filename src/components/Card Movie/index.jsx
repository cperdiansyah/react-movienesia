import React from 'react';
import Moment from 'react-moment';

import './cardMovie.scss';

export default function CardMovie({ movie, className }) {
  const classname = [className];

  return (
    <div className={`card-movie ${classname.join(' ')}`}>
      <div className="image-wrapper">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.original_title}
          loading="lazy"
        />
      </div>
      <div className="content-wrapper px-1">
        <div className="info-wrapper my-3 flex justify-between items-center">
          <div className="rate-wrapper flex items-center border border-yellow-400 bg-yellow-50  py-1 px-2 pr-3 rounded-lg">
            <span className="material-icons-outlined text-yellow-400 mr-1">
              star
            </span>
            <span className="rate font-medium">{movie.vote_average}</span>
          </div>

          <span className="text-sm text-text_secondary">
            <Moment format="MMM DD, YYYY">{movie.release_date}</Moment>
          </span>
        </div>

        <h2 className="title text-lg font-semibold">
          {movie.original_title}
          <span className="year">
            {' '}
            (<Moment format="YYYY">{movie.release_date}</Moment>)
          </span>
        </h2>
      </div>
    </div>
  );
}
