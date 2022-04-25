import React, { useCallback, useContext } from 'react';

import SearchContext from '../../context/SearchContext';

const { Search } = SearchContext;
export default function SearchForm(props) {
  const search = useContext(Search);

  const className = [props.className];

  const searchMovieHandler = useCallback(
    (e) => {
      e.preventDefault();
      search.handleSearch(e);
      console.log(e.target.value);
    },
    [search]
  );

  return (
    <div className={`flex justify-center items-center ${className.join(' ')}`}>
      <div className=" w-full">
        <div className="input-group relative flex flex-wrap items-stretch w-full ">
          {props.isFull ? (
            <input
              type="search"
              className="
              form-control relative flex-auto min-w-0 block px-5 py-3  shadow-md font-normal  rounded-xl transition duration-300 ease-in-out text-lg
              text-gray-700 bg-white bg-opacity-50 dark:bg-dark dark:bg-opacity-50 dark:text-text_secondary_dark bg-clip-padding border border-solid border-gray-300 
             m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600  dark:focus:border-slate-300 focus:outline-none mr-5"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
              onChange={searchMovieHandler}
            />
          ) : (
            <input
              type="search"
              className="form-control shadow-sm relative flex-auto min-w-0 block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-opacity-50 dark:bg-dark dark:bg-opacity-50 dark:text-text_secondary_dark bg-clip-padding border border-solid border-gray-300 
            rounded-lg transition duration-300 ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600  dark:focus:border-slate-300 focus:outline-none mr-5"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
              onChange={searchMovieHandler}
            />
          )}

          <button className=" hidden" type="submit" id="button-addon2">
            <span className="material-icons-outlined">search</span>
          </button>
        </div>
      </div>
    </div>
  );
}
