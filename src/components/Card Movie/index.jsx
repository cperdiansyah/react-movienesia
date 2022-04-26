import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import slugify from '../../helpers/slugify';

import apiConfig from '../../api/api-config';

import './cardMovie.scss';

const { IMAGE_BASE_URL } = apiConfig;

export default function CardMovie({ movie, className, types }) {
  const classname = [className];

  const type = types || 'movie';

  const title = type === 'movie' ? movie.title : movie.name;

  const slug = slugify(title);
  return (
    <div className={`card-movie ${classname.join(' ')}`}>
      <Link to={`/${type}/${slug}?id=${movie.id}`}>
        <div className="image-wrapper">
          <img
            src={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${movie.poster_path}`
                : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS2sRlULpZo5zSIWdlCAaHkCXrRUEG-9mFrc19z4J3PWeiuPArJgsy1VqOW9H6ybhdUps&usqp=CAU'
            }
            alt={title}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="content-wrapper px-1">
          <div className="info-wrapper my-3 flex justify-between items-center">
            <div className="rate-wrapper flex items-center border border-yellow-400 bg-yellow-50  py-1 px-2 pr-3 rounded-lg ">
              <span className="material-icons-outlined text-yellow-400 mr-1">
                star
              </span>
              <span className="rate font-medium">
                {Number(movie.vote_average).toFixed(1)}
              </span>
            </div>

            <span className="text-sm text-text_secondary">
              <Moment format="MMM DD, YYYY">{movie.release_date}</Moment>
            </span>
          </div>

          <h2 className="title text-lg font-semibold">
            {title}
            <span className="year">
              {' '}
              (<Moment format="YYYY">{movie.release_date}</Moment>)
            </span>
          </h2>
        </div>
      </Link>
    </div>
  );
}
