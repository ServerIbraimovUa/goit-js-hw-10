import { Report } from 'notiflix/build/notiflix-report-aio';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import { createMarkup, createMarkupCat } from './js/template/createMarkup';
import refs from './js/refs';

refs.selectEl.addEventListener('change', onValueId);
fetchBreeds()
  .then(arr => {
    load();
    return (refs.selectEl.innerHTML = createMarkup(arr.data));
  })
  .catch(fetchError);

function onValueId(e) {
  const id = e.target.value;
  fetchCatByBreed(id)
    .then(obj => {
      load();
      return (refs.catInfoEl.innerHTML = createMarkupCat(obj.data));
    })
    .catch(fetchError);
}
function fetchError() {
  //   refs.error.hidden = false;
  Report.failure(refs.error.textContent, '');
}

function load() {
  refs.selectEl.hidden = false;

  refs.loaderEl.classList.remove('loader');
}
