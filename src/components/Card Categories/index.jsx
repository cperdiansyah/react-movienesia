import React from 'react';
import Button from '../Button';

export default function CardCategory({ category }) {
  return (
    <div className="flex items-center p-5 bg-slate-200 shadow-lg rounded-xl mr-4 mb-4 justify-around">
      <div className="icon-wrapper md:w-1/3 ">
        <div className="icon-wrapper__icon w-fit bg-primary rounded-xl flex items-center shadow-md justify-center py-3 px-4">
          <span className="material-icons-outlined text-white text-3xl ">
            {category.avatar}
          </span>
        </div>
      </div>

      <div className="categories-content-wrapper  md:w-2/3 md:ml-5">
        <h3 className="categories-content-wrapper__title text-text_primary font-bold text-lg">
          {category.name}
        </h3>
        <p className="categories-content-wrapper__total leading-loose text-base">
          {category.total.toLocaleString('id-ID')}+ Movies
        </p>

        <Button
          type="link"
          href={`/genres/${category.id}`}
          className="underline text-base text-text_primary "
        >
          View More
        </Button>
      </div>
    </div>
  );
}
