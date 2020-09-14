import axios from 'axios';

const API_KEY = '7f0b5ab01080cb0bb4b9db0d9bc41efa'
axios.defaults.baseURL='https://api.themoviedb.org/3'

export const getPopularMovies = async () => {
  try{
    const {data} = await axios.get(`/trending/all/day?api_key=${API_KEY}`)
    return data.results;
  }catch(e) {console.log(e)};
}

export const searchByName = async (search) => {
  try{
    const {data} = await axios.get(`/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`)
    return data.results
  }catch(e) {console.log(e)};
}
export const getMovieDetails = async (id) => {
  try{
    const {data} = await axios.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`)
    return data
  }catch(e) {console.log(e)};
}
export const getMovieCast = async (id) => {
  try{
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`)
    return data.cast;
  }catch(e) {console.log(e)};
}
export const getMovieReview = async (id) => {
  try{
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
    return data.results;
  }catch(e) {console.log(e)};
}