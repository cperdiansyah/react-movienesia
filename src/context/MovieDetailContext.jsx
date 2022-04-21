import React, { createContext, useMemo, useState } from 'react';

function MovieDetailContext() {
  const MovieDetails = createContext();

  function MovieDetailProvider(props) {
    const [detail, setDetails] = useState();

    // const changeDetailHandler = (e) => setDetails(...detail, e.target.value);

    const detailState = useMemo(
      () => ({
        detail,
        setDetails,
      }),
      [detail]
    );

    return (
      <MovieDetails.Provider value={detailState}>
        {props.children}
      </MovieDetails.Provider>
    );
  }
  return { MovieDetails, MovieDetailProvider };
}

export default MovieDetailContext();
