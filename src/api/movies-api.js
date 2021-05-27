import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'f2539677659f743858aef093e7c82be1';

const fetchPopularMovies = () => {
  return axios
    .get(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`)
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
    .get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)
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
    .get(`${BASE_URL}/search/movie?query=${searchQuery}&api_key=${API_KEY}`)
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
