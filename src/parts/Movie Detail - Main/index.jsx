import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ProgressProvider from './ProgressProvider';
import useQuery from '../../helpers/useQuery';
import apiConfig from '../../api/api-config';
import './details.scss';

import MovieDetailContext from '../../context/MovieDetailContext';
import Button from '../../components/Button';
import db from '../../helpers/db';

const { BASE_URL, API_KEY, IMAGE_BASE_URL_ORIGINAL, IMAGE_BASE_URL } =
  apiConfig;
const { MovieDetails } = MovieDetailContext;

export default function MovieDetailMain() {
  const query = useQuery();
  const id = query.get('id');
  const props = useContext(MovieDetails);
  const { detail } = props;

  const [isloading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`)
      .then(({ data }) => {
        props.setDetails(data);
        setLoading(false);
      });
  }, []);
  console.log(props);

  const favoriteButtonHandler = async (e) => {
    e.preventDefault();

    const favorites = await db.friends.add({
      id: detail.id,
      title: detail.title,
      poster_path: detail.poster_path,
      release_date: detail.release_date,
      vote_average: detail.vote_average,
    });
    console.log(favorites);
    // props.setFavorite(!props.isFavorite);
  };

  return (
    <section className="main-details-section pt-52 pb-10 relative h-full min-h-[700px]">
      {!isloading && (
        <div className="container">
          {/* Backdrop Image Section */}
          <div className="backdrop-wrap rounded-b-lg ">
            <img
              src={`${IMAGE_BASE_URL_ORIGINAL}${detail.backdrop_path}`}
              alt={`${detail.title} backdrop`}
              loading="lazy"
              className="backdrop-image object-cover "
            />
            <div className="background-overlay " />
          </div>

          <div className="movie-details-wrap relative flex items-end">
            {/* Poster Image Section */}
            <div className="movie-details-image mr-10 relative">
              <div className="movie-details-image-wrapper">
                <img
                  src={`${IMAGE_BASE_URL}${detail.poster_path}`}
                  alt={`${detail.title} poster`}
                  className="rounded-3xl"
                  loading="lazy"
                />
              </div>
              <div
                className="movie-details-rating-wrapper absolute -bottom-5 right-0"
                style={{ width: 60, height: 60 }}
              >
                <ProgressProvider valueStart={0} valueEnd={detail.vote_average}>
                  {(value) => (
                    <CircularProgressbar
                      value={value}
                      maxValue={10}
                      text={`${value * 10}%`}
                      className="bg-dark rounded-full text-xl"
                      styles={buildStyles({
                        // Text size
                        textSize: '1.5rem',
                        textColor: '#fff',
                        pathTransitionDuration: 1.7,
                      })}
                    />
                  )}
                </ProgressProvider>
              </div>
            </div>

            <div className="movie-details-content">
              <div className="movie-details-content-wrap">
                <div className="movie-details-content-header">
                  <h1 className="text-4xl font-bold text-white">
                    {`${detail.title} (${detail.release_date.split('-')[0]})`}
                  </h1>
                </div>
                <div className="movie-details-content-genres mt-5">
                  {detail.genres.map((genre, index) => (
                    <Button
                      type="link"
                      className="genre-button px-3 py-2 mr-2 rounded-xl shadow-lg text-base font-medium border-2 bg-transparent
                    border-slate-200 text-text_primary_dark hover:border-slate-100 active:border-slate-300"
                      href={`/categories/${genre.id}`}
                      key={index}
                    >
                      {genre.name}
                    </Button>
                  ))}
                </div>
                <div className="movie-details-content-link mt-6 flex items-center">
                  <Button
                    type="link"
                    isExternal
                    className="px-4 pr-5 py-3  rounded-full shadow-lg font-medium 
                    bg-secondary text-white hover:bg-sky-400 active:bg-sky-600 
                    w-fit flex items-center mr-5"
                    href={`/movie/${detail.id}`}
                  >
                    <span className="material-icons">play_arrow</span>
                    Watch Trailer
                  </Button>
                  <Button
                    isFull
                    className="p-2 mr-3 rounded-full flex justify-center items-center border-2 text-slate-300 border-slate-300 hover:border-primary hover:text-white hover:-translate-y-0"
                    onClick={favoriteButtonHandler}
                  >
                    <span className="material-icons">favorite_border</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
