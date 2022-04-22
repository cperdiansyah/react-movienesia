import React, { useEffect, useContext, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

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

import ThemeContext from '../../context/ThemeContext';

const { BASE_URL, API_KEY, IMAGE_BASE_URL_ORIGINAL, IMAGE_BASE_URL } =
  apiConfig;
const { MovieDetails } = MovieDetailContext;
const { Theme } = ThemeContext;

export default function MovieDetailMain() {
  const query = useQuery();
  const id = query.get('id');
  const props = useContext(MovieDetails);
  const { theme } = useContext(Theme);
  const { detail } = props;
  const [isloading, setLoading] = useState(true);
  const [isFavorites, setIsFavorites] = useState();

  useEffect(() => {
    axios
      .get(
        `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=images`
      )
      .then(({ data }) => {
        props.setDetails(data);
        setLoading(false);
      });
  }, []);
  // console.log(props);

  useEffect(() => {
    const getIndexedDB = async () => {
      const all = await db.favorites.toArray();
      const isFavorites = all.some((item) => item.id === Number(id));
      setIsFavorites(isFavorites);
    };
    getIndexedDB();
  }, [isFavorites]);

  const notify = () =>
    toast.success(
      !isFavorites ? 'Aded to your favorites' : 'Removed from favorites',
      {
        position: 'bottom-right',
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme,
        progress: undefined,
      }
    );

  const favoriteButtonHandler = async (e) => {
    e.preventDefault();
    if (!isFavorites) {
      await db.favorites.add({
        id: detail.id,
        title: detail.title,
        poster_path: detail.poster_path,
        release_date: detail.release_date,
        vote_average: detail.vote_average,
      });
    } else {
      await db.favorites.delete(detail.id);
    }
    setIsFavorites(!isFavorites);
    notify();
  };

  const images = detail ? detail.images : [];
  // console.log(images);

  return (
    <HelmetProvider>
      {!isloading && (
        <Helmet>
          <title>{detail.title} | MovieNesia</title>
        </Helmet>
      )}

      <section className="main-details-section pt-52 pb-10 relative h-full min-h-[620px]">
        {!isloading && (
          <div className="container">
            <ToastContainer />
            {/* Backdrop Image Section */}
            <div className="backdrop-wrap rounded-b-lg ">
              <img
                src={`${IMAGE_BASE_URL_ORIGINAL}${detail.backdrop_path}`}
                alt={`${detail.title} backdrop`}
                loading="lazy"
                className="backdrop-image object-cover "
                decoding="async"
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
                    decoding="async"
                  />
                </div>
                <div
                  className="movie-details-rating-wrapper absolute -bottom-5 right-0"
                  style={{ width: 60, height: 60 }}
                >
                  <ProgressProvider
                    valueStart={0}
                    valueEnd={detail.vote_average}
                  >
                    {(value) => (
                      <CircularProgressbar
                        value={value}
                        maxValue={10}
                        text={`${value * 10}%`}
                        className="bg-dark rounded-full shadow-lg text-xl"
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

              {/* Content Movie Details */}
              <div className="movie-details-content">
                <div className="movie-details-content-wrap">
                  <div className="movie-details-content-header">
                    <h1 className="text-4xl font-bold text-dark drop-shadow-lg dark:text-text_primary_dark">
                      {`${detail.title} (${detail.release_date.split('-')[0]})`}
                    </h1>
                  </div>
                  <div className="movie-details-content-genres mt-5">
                    {detail.genres.map((genre, index) => (
                      <Button
                        type="link"
                        className="genre-button px-3 py-2 mr-2 rounded-xl shadow-lg text-base font-medium  border-2 
                        bg-transparent border-slate-800 
                      border-transparent text-dark hover:bg-slate-100 hover:bg-opacity-60 

                    dark:border-slate-200 dark:text-text_primary_dark dark:hover:bg-dark dark:hover:bg-opacity-70 dark:hover:border-slate-100 dark:active:border-slate-300
                      transition duration-300 ease-in-out
                    "
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
                      className="px-4 pr-5 py-3 rounded-full shadow-lg font-medium 
                    bg-secondary text-white hover:bg-sky-400 active:bg-sky-600
                    dark:bg-slate-200 dark:text-dark
                    w-fit flex items-center mr-5  transition duration-300 ease-in-out"
                      href={`/movie/${detail.id}`}
                    >
                      <span className="material-icons mr-2">play_arrow</span>
                      Watch Trailer
                    </Button>

                    <Button
                      isFull
                      className="button-icon "
                      onClick={favoriteButtonHandler}
                    >
                      {isFavorites ? (
                        <span className="material-icons-outlined favorited">
                          favorite
                        </span>
                      ) : (
                        <span className="material-icons-outlined">
                          favorite_border
                        </span>
                      )}
                    </Button>

                    <Button
                      type="link"
                      isExternal
                      href={detail.homepage ? detail.homepage : '#'}
                      target="_blank"
                      className="button-icon"
                    >
                      <span className="material-icons-outlined">link</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </HelmetProvider>
  );
}
