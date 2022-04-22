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

  return (
    <HelmetProvider>
      <Helmet>
        <title>Favorites | MovieNesia</title>
      </Helmet>
      <section className=" hero-movies pt-24 pb-12">
        {favorites && (
          <div className="container">
            <div className="movie-wrapper grid grid-cols-6 gap-4 w-full mt-10">
              {favorites.map((favorite) => (
                <CardMovie
                  key={favorite.id}
                  movie={favorite}
                  type="movie"
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
