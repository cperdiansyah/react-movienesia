import React from 'react';
import PropTypes from 'prop-types';

export default function Home(props) {
  return <div className="bg-dark text-white">{props.children}</div>;
}

Home.propTypes = {
  children: PropTypes.node,
};
