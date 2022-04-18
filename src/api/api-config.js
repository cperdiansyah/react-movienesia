const ApiConfig = () => {
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const BASE_URL = 'https://api.themoviedb.org/3';
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
  const IMAGE_BASE_URL_ORIGINAL = 'https://image.tmdb.org/t/p/original';

  const endpoint = {
    popular: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    search: `${BASE_URL}/search/movie`,
    movie: `${BASE_URL}/movie`,
  };

  return {
    IMAGE_BASE_URL,
    IMAGE_BASE_URL_ORIGINAL,
    BASE_URL,
    API_KEY,
    endpoint,
  };
};

export default ApiConfig();
