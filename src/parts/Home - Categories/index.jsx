import React from 'react';
import env from 'react-dotenv';

import CardCategory from '../../components/Card Categories';

export default function Categories() {
  // const [categories, setCategories] = useState([]);

  const categories = [
    {
      id: 28,
      name: 'Action',
      avatar: 'local_police',
      total: 1300,
    },
    {
      id: 12,
      name: 'Adventure',
      avatar: 'local_florist',
      total: 200,
    },
    {
      id: 16,
      name: 'Animation',
      avatar: 'cruelty_free',
      total: 300,
    },
    {
      id: 35,
      name: 'Comedy',
      avatar: 'theater_comedy',
      total: 1000,
    },
    {
      id: 80,
      name: 'Crime',
      avatar: 'gavel',
      total: 300,
    },
    {
      id: 99,
      name: 'Documentary',
      avatar: 'local_library',
      total: 300,
    },
    {
      id: 18,
      name: 'Drama',
      avatar: 'stadium',
      total: 1500,
    },
    {
      id: 10751,
      name: 'Family',
      avatar: 'family_restroom',
      total: 600,
    },
    {
      id: 14,
      name: 'Fantasy',
      avatar: 'auto_fix_high',
      total: 800,
    },
    {
      id: 36,
      name: 'History',
      avatar: 'hourglass_bottom',
      total: 400,
    },
    {
      id: 27,
      name: 'Horror',
      avatar: 'sentiment_very_dissatisfied',
      total: 750,
    },
    {
      id: 10402,
      name: 'Music',
      avatar: 'music_note',
      total: 300,
    },
    {
      id: 9648,
      name: 'Mystery',
      avatar: 'help_center',
    },
    {
      id: 10749,
      name: 'Romance',
      avatar: 'volunteer_activism',
      total: 300,
    },
    {
      id: 878,
      name: 'Science Fiction',
      avatar: 'settings',
      total: 300,
    },
    {
      id: 10770,
      name: 'TV Movie',
      avatar: 'desktop_windows',
      total: 900,
    },
    {
      id: 53,
      name: 'Thriller',
      avatar: 'healing',
      total: 300,
    },
    {
      id: 10752,
      name: 'War',
      avatar: 'flag',
      total: 300,
    },
    {
      id: 37,
      name: 'Western',
      avatar: 'explore',
      total: 300,
    },
  ];

  return (
    <section className="hero-categories-section pt-10">
      <div className="container">
        <div className="title-wrapper flex items-center">
          <h3
            className="title font-bold text-5xl  md:w-1/2 leading-snug
          text-text_primary
          dark:text-text_primary_dark"
          >
            Choose The Type Of Film You Liked
          </h3>
          <p
            className="md:w-1/2 text-base
           text-text_secondary
            dark:text-text_secondary_dark"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
            dolores totam harum, magni ducimus, pariatur necessitatibus quasi
            aut, dolorum aspernatur tempore eum maiores reiciendis nisi!
            Molestiae obcaecati molestias quae assumenda?
          </p>
        </div>
        <div
          className="categories-wrapper w-full mt-10 
          grid grid-cols-2 gap-5 md:grid-cols-3
         lg:grid-cols-4 "
        >
          {categories
            .sort((a, b) => b.total - a.total)
            .slice(0, 8)
            .map((category) => (
              <CardCategory key={category.id} category={category} />
            ))}
        </div>
      </div>
    </section>
  );
}
