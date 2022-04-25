import React from 'react';
import SearchForm from '../../components/Search Form';

export default function DiscoverSection() {
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
          </div>
        </div>
      </div>
    </section>
  );
}
