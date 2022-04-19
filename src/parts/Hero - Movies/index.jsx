import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import ApiConfig from '../../api/api-config';
import Button from '../../components/Button';
import CardMovie from '../../components/Card Movie';
import ContentHomeContext from '../../context/MovieContext';
import './hero.scss';

const { BASE_URL, API_KEY } = ApiConfig;
const { Content } = ContentHomeContext;

export default function HeroMovies() {
  const props = useContext(Content);

  const [movies, setMovies] = useState([]);

  /* Side effect for consume API */

  useEffect(() => {
    axios
      .get(
        `${BASE_URL}/${props.content.type}/popular?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then(({ data }) => setMovies(data.results.slice(0, 12)));
  }, [props.content.type]);

  const activeButtonHandler = (e) => {
    const parentElement = e.target.parentNode;
    parentElement.querySelector('button.active').classList.remove('active');
    e.target.classList.add('active');
  };

  const typeContentHandler = (e) => {
    activeButtonHandler(e);
    props.changeContentType(e);
  };
  const filterContentHandler = (e) => {
    activeButtonHandler(e);
    props.changeContentFilter(e);
  };
  return (
    <section className="hero-movies py-12" id="discover">
      <div className="container">
        <div className="title-wrapper">
          <h1
            className="capitalize text-5xl font-bold text-text_primary leading-tight 
          dark:text-text_primary_dark"
          >
            The Most Popular
            <span className="block ">
              {props.content.type === 'movie' ? 'movies' : 'Tv shows'} To Watch
              In {new Date().getFullYear()}{' '}
            </span>
          </h1>
        </div>
        <div className="button-wrapper mt-5 flex justify-between">
          <div className="type-content-wrapper">
            <Button
              className="active mr-3"
              value="movie"
              onClick={typeContentHandler}
            >
              Movies
            </Button>
            <Button className="ml-2" value="tv" onClick={typeContentHandler}>
              TV Shows
            </Button>
          </div>

          <div className="filter-content-wrapper">
            <Button
              className="active"
              value="all"
              onClick={filterContentHandler}
            >
              All
            </Button>
            <Button className="" value="rating" onClick={filterContentHandler}>
              Rating
            </Button>
            <Button className="" value="vote" onClick={filterContentHandler}>
              Vote
            </Button>
            <Button className="" value="latest" onClick={filterContentHandler}>
              Latest
            </Button>
            <Button className="" value="genre" onClick={filterContentHandler}>
              Genre
            </Button>
          </div>
        </div>

        <div className="movie-wrapper grid grid-cols-6 gap-4 w-full mt-10">
          {movies.map((movie) => (
            <CardMovie
              key={movie.id}
              movie={movie}
              type={props.content.type}
              className="w-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
