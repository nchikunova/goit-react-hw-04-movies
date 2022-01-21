import axios from 'axios';
import { API_KEY } from './api-key';

const BASE_URL = 'https://api.themoviedb.org/3';

const fetchPopularMovies = () => {
  return axios
    .get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
    .then(({ data }) => data)
    .catch(error => error);
};
const fetchMovieDetails = movieId => {
  return axios
    .get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    .then(({ data }) => data)
    .catch(error => error);
};

const fetchCast = movieId => {
  return axios
    .get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
    )
    .then(({ data }) => data)
    .catch(error => error);
};

const fetchReviews = movieId => {
  return axios
    .get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`)
    .then(({ data }) => data)
    .catch(error => error);
};
const fetchSearchMovies = ({ searchQuery = '' }) => {
  return axios
    .get(
      `${BASE_URL}/search/movie?query=${searchQuery}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,
    )
    .then(({ data }) => data)
    .catch(error => error);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchPopularMovies,
  fetchMovieDetails,
  fetchSearchMovies,
  fetchCast,
  fetchReviews,
};
