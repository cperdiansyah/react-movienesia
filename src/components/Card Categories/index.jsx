import React from 'react';
import Button from '../Button';

export default function CardCategory({ category }) {
  //   console.log(category);
  return (
    <div>
      <div className="icon-wrapper">
        <div className="icon-wrapper__icon">
          <span className="material-icons-outlined">{category.avatar}</span>
        </div>
      </div>
      <div className="categories-content-wrapper">
        <h3 className="categories-content-wrapper__title">{category.name}</h3>
        <p className="categories-content-wrapper__total">
          {category.total.toLocaleString('id-ID')}+ Movies
        </p>

        <Button type="link" href={`/genres/${category.id}`}>
          View More
        </Button>
      </div>
    </div>
  );
}
