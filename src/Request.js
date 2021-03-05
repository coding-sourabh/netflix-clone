const API_KEY = "87d06472dc3371908d40dfdc5c3ebb92";

const requests = {
  fetchTrending: `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
  fetchPopular: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
};

export default requests;
