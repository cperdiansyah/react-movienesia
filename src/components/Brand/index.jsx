/* eslint-disable react/forbid-prop-types */
import React from 'react';
import propTypes from 'prop-types';
import Button from '../Button';
import logo from '../../assets/image/icon/logo.svg';
import './style.scss';

export default function Brand(props) {
  const className = [props.className];
  const { isFull } = props;
  if (isFull) {
    className.push('brand-full');
    return (
      <div className={`brand-wrapper ${className.join(' ')}`}>
        <Button type="link" href="/" className="inline-block">
          <div className="brand-wrapper flex items-center">
            <img
              src={logo}
              alt="brand-icon"
              className="h-11 w-11"
              loading="lazy"
            />
            <h3 className="font-semibold text-xl">
              <span className="text-primary">Movie</span>
              <span className="text-secondary">Nesia</span>
            </h3>
          </div>
        </Button>
      </div>
    );
  }
  return (
    <div className="brand-wrapper">
      <Button className="brand" type="link" href="/">
        <img src={logo} alt="brand-icon" className={`brand ${className}`} />
      </Button>
    </div>
  );
}
Brand.propTypes = {
  isFull: propTypes.bool,
  className: propTypes.string,
};
