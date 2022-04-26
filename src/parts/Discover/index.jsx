import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import apiConfig from '../../api/api-config';
import CardMovie from '../../components/Card Movie';
import SearchForm from '../../components/Search Form';
import useQuery from '../../helpers/useQuery';

const { BASE_URL, API_KEY } = apiConfig;

export default function DiscoverSection() {
  const { pathname } = useLocation();
  const [searchResult, setSearchResult] = useState('');
  console.log(pathname.split('/'));
  const query = useQuery();
  const search = query.get('search') || query.get('genres');

  useEffect(() => {
    if (query.has('genres')) {
      axios
        .get(
          `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${search}`
        )
        .then(({ data }) => {
          setSearchResult(data);
        });
    } else if (search) {
      axios
        .get(`${BASE_URL}/search/multi?api_key=${API_KEY}&query=${search}`)
        .then(({ data }) => {
          setSearchResult(data);
        });
    }
  }, [pathname, search]);

  console.log(searchResult);

  return (
    <section className="py-36">
      <div className="container">
        <div className="title-wrapper text-center">
          <div className=" w-full">
            <h3
              className="title font-bold text-4xl  leading-snug
          text-text_primary
          dark:text-text_primary_dark"
            >
              Discover Movies or TV Shows
            </h3>
          </div>
        </div>
        <div className="search-content mt-9 w-1/2 mx-auto">
          <div className="search-wrapper">
            <SearchForm isFull />
            {search && (
              <h5
                className="title font-bold text-2xl  leading-snug
          text-text_primary text-center mt-5
          dark:text-text_primary_dark"
              >
                Search :{' '}
                {query.has('genres')
                  ? `Categories ${decodeURI(pathname.split('/')[3])}`
                  : search}
              </h5>
            )}
          </div>
        </div>

        <div className="movie-wrapper grid grid-cols-6 gap-4 w-full mt-10">
          {query.has('genres')
            ? searchResult &&
              searchResult.results.map((result) => (
                <CardMovie
                  key={result.id}
                  movie={result}
                  type={result.media_type}
                  className="w-full"
                />
              ))
            : searchResult &&
              searchResult.results
                .filter(
                  (result) =>
                    result.media_type === 'tv' || result.media_type === 'movie'
                )
                .map((result) => (
                  <CardMovie
                    key={result.id}
                    movie={result}
                    type={result.media_type}
                    className="w-full"
                  />
                ))}
        </div>
      </div>
    </section>
  );
}
