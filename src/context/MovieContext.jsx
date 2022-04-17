import React, { createContext, useCallback, useMemo, useState } from 'react';

function EntertainmentContext() {
  const Entertainment = createContext();

  function EntertainmentProvider(props) {
    const [entertainment, setEntertainment] = useState('movies');

    const changeEntertainment = (e) => setEntertainment(e.target.value);

    const entertainmentState = useMemo(
      () => ({ entertainment, changeEntertainment }),
      [entertainment]
    );

    const memoizeComponent = useCallback(
      () => (
        <Entertainment.Provider value={entertainmentState}>
          {props.children}
        </Entertainment.Provider>
      ),
      []
    );

    return memoizeComponent();
  }

  return { Entertainment, EntertainmentProvider };
}

export default EntertainmentContext();
