import React, { useContext } from 'react';
import Button from '../../components/Button';
import ContentHomeContext from '../../context/MovieContext';
import './hero.scss';

const { Content } = ContentHomeContext;

export default function HeroMovies() {
  const props = useContext(Content);
  // console.log(props);

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
    <section className="hero-movies py-12">
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

          <div className="sort-content-wrapper">
            <div className="filter-content-wrapper">
              <Button
                className="active"
                value="all"
                onClick={filterContentHandler}
              >
                All
              </Button>
              <Button
                className=""
                value="rating"
                onClick={filterContentHandler}
              >
                Rating
              </Button>
              <Button className="" value="vote" onClick={filterContentHandler}>
                Vote
              </Button>
              <Button
                className=""
                value="latest"
                onClick={filterContentHandler}
              >
                Latest
              </Button>
              <Button className="" value="genre" onClick={filterContentHandler}>
                Genre
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
