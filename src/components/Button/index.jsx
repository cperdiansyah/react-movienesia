/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';
import './Button.scss';

export default function Button(props) {
  const className = [props.className];
  const onClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  if (props.isDisabled || props.isLoading) {
    if (props.isDisabled) {
      className.push('disabled');
    }
    return (
      <span className={className.join(' ')} style={props.style}>
        {props.isLoading ? (
          <>
            <span className="spinner-border spinner-border-sm mx-5" />
            <span className="sr-only">Loading...</span>
          </>
        ) : (
          props.children
        )}
      </span>
    );
  }

  if (props.type === 'link') {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(' ')}
          style={props.style}
          target={props.target === '_blank' ? '_blank' : undefined}
          rel="noopener noreferrer"
        >
          {props.children}
        </a>
      );
    }
    return (
      <NavLink
        to={props.href}
        className={className.join(' ')}
        style={props.style}
        onClick={onClick}
      >
        {props.children}
      </NavLink>
    );
  }

  return (
    <button
      className={`button-components ${className.join(' ')}`}
      style={props.style}
      onClick={props.onClick}
      type="button"
      value={props.value}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  children: propTypes.node,
  type: propTypes.oneOf(['button', 'link']),
  onClick: propTypes.func,
  href: propTypes.string,
  target: propTypes.string,
  className: propTypes.string,
  style: propTypes.object,

  isExternal: propTypes.bool,
  isDisabled: propTypes.bool,
  isLoading: propTypes.bool,
};
