/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0, 'initial');
  }, [pathname]);

  return <>{props.children}</>;
}

export default ScrollToTop;
