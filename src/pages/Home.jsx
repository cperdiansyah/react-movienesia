import React from 'react';
import PropTypes from 'prop-types';

// import Helmet from 'react-helmet';

import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function Home(props) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="bg-dark text-white">{props.children}</div>
    </HelmetProvider>
  );
}

Home.propTypes = {
  children: PropTypes.node,
};
