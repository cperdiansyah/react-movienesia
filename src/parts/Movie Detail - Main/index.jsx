import React, { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import useQuery from '../../helpers/useQuery';
import apiConfig from '../../api/api-config';
import './details.scss';

import MovieDetailContext from '../../context/MovieDetailContext';
import Button from '../../components/Button';

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

  return (
    <section className="main-details-section py-24 relative max-h-[600px]">
      {!isloading && (
        <div className="container">
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
            <div className="movie-details-image mr-10">
              <img
                src={`${IMAGE_BASE_URL}${detail.poster_path}`}
                alt={`${detail.title} poster`}
                className="rounded-3xl"
                loading="lazy"
              />
            </div>
            <div className="movie-details-content">
              <div className="movie-details-content-wrap">
                <div className="movie-details-content-header">
                  <h1 className="text-4xl font-bold text-white">
                    {detail.title}
                  </h1>
                </div>
                <div className="movie-details-content-genres mt-5">
                  {detail.genres.map((genre, index) => (
                    <Button
                      type="link"
                      className="genre-button px-2 py-2 mr-2 rounded-lg shadow-lg text-base font-medium 
                    bg-secondary text-white hover:bg-sky-400 active:bg-sky-600
                    dark:bg-slate-200 dark:text-slate-800 dark:hover:bg-slate-100 dark:active:bg-slate-300"
                      href={`/categories/${genre.id}`}
                      key={index}
                    >
                      {genre.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
