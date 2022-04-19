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

  /* Side effect for default consume API */
  useEffect(() => {
    axios
      .get(
        `${BASE_URL}/${props.content.type}/${props.content.filter}?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then(({ data }) => setMovies(data.results.slice(0, 12)));
  }, [props.content.type, props.content.filter]);

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
    // console.log(e.target.value);
    props.changeContentFilter(e);
  };

  let discoverTitle;

  switch (props.content.filter) {
    case 'popular':
      discoverTitle = ' The Most Popular';
      break;
    case 'now_playing':
    case 'airing_today':
      discoverTitle = 'Now Playing';
      break;

    case 'upcoming':
    case 'on_the_air':
      discoverTitle = "Here's Upcoming";
      break;

    case 'top_rated':
      discoverTitle = 'Top Rated';
      break;
    default:
      discoverTitle = '';
  }
  return (
    <section className="hero-movies py-12" id="discover">
      <div className="container">
        <div className="title-wrapper">
          <h1
            className="capitalize text-5xl font-bold text-text_primary leading-tight 
          dark:text-text_primary_dark "
          >
            {discoverTitle}
            {props.content.type === 'movie' ? ' movies' : ' Tv shows'}
            <span className="block">
              To Watch
              <span>
                {props.content.filter === 'top_rated'
                  ? ' All The Time'
                  : ` In ${new Date().getFullYear()}`}
              </span>
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
              value={
                props.content.type === 'movie' ? 'now_playing' : 'airing_today'
              }
              onClick={filterContentHandler}
            >
              Now Playing
            </Button>
            <Button
              className=""
              value={props.content.type === 'movie' ? 'upcoming' : 'on_the_air'}
              onClick={filterContentHandler}
            >
              Upcoming
            </Button>
            <Button className="" value="popular" onClick={filterContentHandler}>
              Popular
            </Button>
            <Button
              className=""
              value="top_rated"
              onClick={filterContentHandler}
            >
              Rating
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
