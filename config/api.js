const apiKey = "3ce152ae80ceecb962a625724dcbba73";

//Função que eu busco os filmes pelo nome
async function searchMovieByName(title) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${title}&language=en-US&page=1`;
  const fetchResponse = await fetch(url);
  const { results } = await fetchResponse.json();
  return results;
}

//função que eu pego os filmes populares
async function getPopularMovies() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
  const fetchResponse = await fetch(url);
  const { results } = await fetchResponse.json();
  return results;
}

export const API = {
  searchMovieByName,
  getPopularMovies,
};
