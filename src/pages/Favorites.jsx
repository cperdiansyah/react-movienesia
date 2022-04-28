import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import db from '../helpers/db';
import CardMovie from '../components/Card Movie';

export default function Favorites() {
  const [favorites, setIsFavorites] = useState();

  useEffect(() => {
    const getIndexedDB = async () => {
      const all = await db.favorites.toArray();
      setIsFavorites(all);
    };
    getIndexedDB();
  }, []);

  // console.log(favorites);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Favorites | MovieNesia</title>
      </Helmet>
      <section className=" hero-movies pt-32 pb-24">
        <div className="title-wrapper text-center">
          <div className=" w-full">
            <h3
              className="title font-bold text-5xl  leading-snug
          text-text_primary
          dark:text-text_primary_dark"
            >
              Your Favorites Movies or Shows
            </h3>
          </div>
        </div>
        {favorites && (
          <div className="container">
            <div className="movie-wrapper grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full mt-10">
              {favorites.map((favorite) => (
                <CardMovie
                  key={favorite.id}
                  movie={favorite}
                  type={favorite.type}
                  className="w-full"
                />
              ))}
            </div>
          </div>
        )}
      </section>
    </HelmetProvider>
  );
}
