import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchForm(props) {
  const navigate = useNavigate();

  const className = [props.className];
  const [search, setSearch] = useState('');

  const searchMovieHandler = useCallback(
    (e) => {
      e.preventDefault();
      setSearch(e.target.value);
      // console.log(e.target.value);
    },
    [search]
  );

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(search);
    navigate(`/discover/?search=${search}`);
    setSearch('');
  };

  return (
    <div
      className={`flex justify-center items-center mr-3 ${className.join(' ')}`}
    >
      <div className=" w-full">
        <div className="input-group relative flex flex-wrap items-stretch w-full  ">
          <form onSubmit={submitHandler} className="w-full">
            {props.isFull ? (
              <input
                type="search"
                className="
              form-control relative flex-auto min-w-0 block px-5 py-3  shadow-md font-normal  rounded-xl transition duration-300 ease-in-out text-lg w-full
              text-gray-700 bg-white bg-opacity-50 dark:bg-dark dark:bg-opacity-50 dark:text-text_secondary_dark bg-clip-padding border border-solid border-gray-300 
             m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600  dark:focus:border-slate-300 focus:outline-none mr-5"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2"
                value={search}
                onChange={searchMovieHandler}
              />
            ) : (
              <input
                type="search"
                className="form-control shadow-sm relative flex-auto min-w-0 block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-opacity-50 dark:bg-dark dark:bg-opacity-50 dark:text-text_secondary_dark bg-clip-padding border border-solid border-gray-300  w-full
            rounded-lg transition duration-300 ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600  dark:focus:border-slate-300 focus:outline-none mr-5"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2"
                value={search}
                onChange={searchMovieHandler}
              />
            )}

            <button className=" hidden" type="submit" id="button-addon2">
              <span className="material-icons-outlined">search</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
