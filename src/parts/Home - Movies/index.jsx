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
  const [trending, setTrending] = useState(false);

  /* Side effect for default consume API */
  useEffect(() => {
    if (props.content.filter === 'trending') {
      axios
        .get(
          `${BASE_URL}/trending/${props.content.type}/week?api_key=${API_KEY}`
        )
        .then(({ data }) => setMovies(data.results.slice(0, 12)));
    } else {
      axios
        .get(
          `${BASE_URL}/${props.content.type}/${props.content.filter}?api_key=${API_KEY}&language=en-US&page=1`
        )
        .then(({ data }) => setMovies(data.results.slice(0, 12)));
    }

    // console.log(props.content);
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
    props.changeContentFilter(e);
  };

  const filterTrendingHandler = (e) => {
    activeButtonHandler(e);
    props.changeContentFilter(e);
    setTrending(!trending);
  };

  let discoverTitle;
  let timingTitle;
  switch (props.content.filter) {
    case 'popular':
      discoverTitle = `The Most Popular ${
        props.content.type === 'movie' ? ' movies' : ' Tv shows'
      } `;
      timingTitle = `To Watch In ${new Date().getFullYear()}`;
      break;
    case 'now_playing':
    case 'airing_today':
      discoverTitle = `Now Playing ${
        props.content.type === 'movie' ? ' movies' : ' Tv shows'
      }`;
      timingTitle = `To Watch In ${new Date().getFullYear()}`;

      break;

    case 'upcoming':
    case 'on_the_air':
      discoverTitle = `Here's Upcoming ${
        props.content.type === 'movie' ? ' movies' : ' Tv shows'
      }`;
      timingTitle = `To Watch In ${new Date().getFullYear()}`;

      break;

    case 'top_rated':
      discoverTitle = `Top Rated ${
        props.content.type === 'movie' ? ' movies' : ' Tv shows'
      } `;
      timingTitle = `To Watch All The Time`;

      break;
    case 'trending':
      discoverTitle = `Trending ${
        props.content.type === 'movie' ? ' movies' : ' Tv shows'
      } `;
      timingTitle = `To Watch In This Week`;

      break;
    default:
      discoverTitle = '';
  }

  return (
    <section className="hero-movies py-12 pb-24" id="discover">
      <div className="container">
        <div className="title-wrapper">
          <h1
            className="capitalize text-5xl font-bold text-text_primary leading-tight 
          dark:text-text_primary_dark text-center lg:text-left "
          >
            {discoverTitle} <span className="lg:block">{timingTitle}</span>
          </h1>
        </div>

        <div className="button-wrapper mt-5 flex flex-col lg:flex-row justify-between">
          <div className="type-content-wrapper mt-3 lg:mt-0">
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

          <div className="filter-content-wrapper overflow-x-scroll flex flex-row mt-5 lg:mt-0  ">
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
              value="trending"
              onClick={filterTrendingHandler}
            >
              Trending
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

        <div className="movie-wrapper grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full mt-10">
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
