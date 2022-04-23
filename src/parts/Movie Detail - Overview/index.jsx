import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import MovieDetailContext from '../../context/MovieDetailContext';
import apiConfig from '../../api/api-config';

import './overview.scss';
import Button from '../../components/Button';
import CardMovie from '../../components/Card Movie';

const { MovieDetails } = MovieDetailContext;
const { BASE_URL, API_KEY } = apiConfig;

export default function MovieDetailOverview() {
  const { detail } = useContext(MovieDetails);
  const [credit, setCredit] = useState([]);
  useEffect(() => {
    if (detail) {
      axios
        .get(
          `${BASE_URL}/movie/${detail.id}/credits?api_key=${API_KEY}&language=en-US `
        )
        .then(({ data }) => {
          setCredit(data);
        });
    } else {
      setCredit([]);
    }
  }, [detail]);

  const { cast } = credit ?? [];

  const { backdrops, posters } = detail ? detail.images : [];

  const { recommendations } = detail ?? [];
  console.log(recommendations);

  return (
    <section className="overview-section py-12 mt-5">
      {detail && (
        <div className="container">
          <div className="content-wrapper flex">
            <div className="movie-details-content-overview  w-2/3">
              <div className="overview-wrapper">
                <h2 className="text-2xl font-bold  text-dark drop-shadow-md dark:text-text_primary_dark">
                  Synopsis
                </h2>
                <p className="max-w-xl mt-3 text-lg font-normal text-dark drop-shadow-md dark:text-text_primary_dark">
                  {detail.overview}
                </p>
              </div>

              <div className="tabs-wrapper mt-5  pr-7">
                <Tabs>
                  <TabList>
                    <Tab>Backdrops</Tab>
                    <Tab>Posters</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="backdrop-wrapper flex flex-wrap flex-row w-full">
                      {backdrops &&
                        backdrops.slice(0, 6).map((backdrop, index) => (
                          <div
                            className="backdrop-wrapper md:w-1/3 p-2"
                            key={index}
                          >
                            <div className="backdrop-item ">
                              <img
                                src={`https://image.tmdb.org/t/p/w500${backdrop.file_path}`}
                                alt={`${detail.title} backdrop`}
                                loading="lazy"
                                decoding="async"
                                className="backdrop-img w-full  rounded-lg shadow-md"
                              />
                            </div>
                          </div>
                        ))}

                      <Button
                        type="link"
                        isExternal
                        target="_blank"
                        href={`https://www.themoviedb.org/movie/${detail.id}/images/backdrops`}
                        className="dark:text-text_primary_dark text-lg font-semibold underline underline-offset-2 pl-2"
                      >
                        See More Backdrops
                      </Button>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="posters-wrapper flex flex-wrap flex-row w-full">
                      {posters &&
                        posters.slice(0, 8).map((posters, index) => (
                          <div
                            className="posters-wrapper md:w-1/4 p-2"
                            key={index}
                          >
                            <div className="posters-item ">
                              <img
                                src={`https://image.tmdb.org/t/p/w500${posters.file_path}`}
                                alt={`${detail.title} posters`}
                                loading="lazy"
                                decoding="async"
                                className="posters-img w-full  rounded-xl shadow-lg"
                              />
                            </div>
                          </div>
                        ))}

                      <Button
                        type="link"
                        isExternal
                        target="_blank"
                        href={`https://www.themoviedb.org/movie/${detail.id}/images/posters`}
                        className="dark:text-text_primary_dark text-lg font-semibold underline underline-offset-2 pl-2"
                      >
                        See More Posters
                      </Button>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>

            <div className="w-1/3">
              <div className="cast-wrapper">
                <h2 className="text-2xl font-semibold dark:text-text_primary_dark ">
                  Cast
                </h2>
                <div className="cast-list mt-5">
                  <ul>
                    {cast &&
                      cast.slice(0, 5).map((cast, index) => (
                        <li className="cast-item mb-4" key={index}>
                          <div className="cast-item-wrapper flex flex-row w-full">
                            <div className="cast-item-img mr-4 md:w-1/5 ">
                              <img
                                src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                                alt={cast.name}
                                loading="lazy"
                                className="rounded-full shadow-md object-cover h-16 w-16"
                                decoding="async"
                              />
                            </div>

                            <div className="name-wrapper  md:w-4/5">
                              <h3 className="text-lg font-semibold overflow-hidden text-ellipsis drop-shadow-md text-primary">
                                <Button
                                  type="link"
                                  isExternal
                                  href={`https://www.themoviedb.org/person/${cast.id}`}
                                  target="_blank"
                                >
                                  {cast.character}
                                </Button>
                              </h3>
                              <span className="cast-item-name text-base text-text_secondary dark:text-white font-semibold pt-2">
                                {cast.name}
                              </span>
                            </div>
                          </div>
                        </li>
                      ))}
                    <li>
                      <Button
                        href={`https://www.themoviedb.org/movie/${detail.id}/cast`}
                        isExternal
                        type="link"
                        target="_blank"
                        className="dark:text-text_primary_dark text-lg font-semibold underline underline-offset-2 "
                      >
                        See More Cast
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {recommendations && (
            <div className="recomendations-wrapper mt-5">
              <h2 className="text-2xl font-bold text-dark drop-shadow-md dark:text-text_primary_dark ">
                Recommendations Movie
              </h2>
              <div className="movie-wrapper grid grid-cols-6 gap-4 w-full mt-4">
                {recommendations.results.slice(0, 6).map((movie) => (
                  <CardMovie
                    key={movie.id}
                    movie={movie}
                    type="movie"
                    className="w-full"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
