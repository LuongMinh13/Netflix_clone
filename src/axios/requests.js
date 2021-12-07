// 91bc26b1a9a9705c3c7d4e23a16a5d19
// https://api.themoviedb.org/3

const API_KEY = "91bc26b1a9a9705c3c7d4e23a16a5d19";
const BASE_URL = "https://api.themoviedb.org/3";

const requests = {
  fetchTrending: `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`,
  fetchNetflixOriginals: `${BASE_URL}/trending/all/week?api_key=${API_KEY}`,
  fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&page=1`,
  fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchAnimation: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchDocumentary: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchSciFi: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=878`,
};

export default requests;