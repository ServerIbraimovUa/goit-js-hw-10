import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_ENwvfA1ajvZtHtuPVtVujcLFFwtoZPMdF4b16yIiS25NiI21sc6WFvUoSaP0HfUV';
const API_URL = 'https://api.thecatapi.com/v1/breeds';
const SEARCH_URL = `https://api.thecatapi.com/v1/images/search`;
function fetchBreeds() {
  return axios.get(API_URL);
}

function fetchCatByBreed(breedId) {
  return axios.get(`${SEARCH_URL}?breed_ids=${breedId}`);
}
export { fetchBreeds, fetchCatByBreed };
