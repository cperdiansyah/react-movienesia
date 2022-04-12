import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

export default function Home(props) {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="bg-dark text-white">{props.children}</div>
    </>
  );
} 

Home.propTypes = {
  children: PropTypes.node,
};
