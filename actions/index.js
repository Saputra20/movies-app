import axios from "axios";

const BASE_URL = "http://localhost:3333";
const MOVIE_DATA = [];

const CATEGORY_DATA = [
  { id: 1, name: "Drama" },
  { id: 2, name: "Action" },
  { id: 3, name: "Adventure" },
  { id: 4, name: "Historical" },
];

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(CATEGORY_DATA);
    }, 50);
  });
};

export const getMovies = () => {
  return axios.get(`${BASE_URL}/api/v1/movies`).then((res) => {
    const { status } = res.data;
    if (status == 200) {
      const { data } = res.data;
      return data;
    } else {
      return [];
    }
  });
};

export const createMovie = (movie) => {
  movie.id = Math.random().toString().substr(2, 7);
  return axios.post(`${BASE_URL}/api/v1/movies`, movie).then((res) => {
    const { status } = res.data;
    if (status == 200) {
      const { data } = res.data;
      return data;
    } else {
      return [];
    }
  });
};

export const getMovieById = (id) => {
  return axios.get(`${BASE_URL}/api/v1/movies/${id}`).then((res) => {
    const { status } = res.data;
    if (status == 200) {
      const { data } = res.data;
      return data;
    } else {
      return [];
    }
  });
};

export const deleteMovieById = (id) => {
  return axios.delete(`${BASE_URL}/api/v1/movies/${id}`).then((res) => {
    const { status } = res.data;
    if (status == 200) {
      const { data } = res.data;
      return data;
    } else {
      return [];
    }
  });
};
