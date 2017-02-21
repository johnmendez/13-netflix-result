import 'whatwg-fetch';
import fillResults from './fill-in-result'

const searchBtn = document.querySelector('.netflix-submit');
const searchInput = document.querySelector('.netflix-video');
const resultsCard = document.querySelector('.card');
// const searchForm = document.querySelector('.search-bar');

function searchForShow(name) {
  fetch(`http://netflixroulette.net/api/api.php?title=${name}`)
    .then(r => r.json())
    .then((data) => {
      fillResults(resultsCard, data);
    });
}

searchForShow('Attack%20on%20titan');

searchBtn.addEventListener('click', () => {
  searchForShow(searchInput.value);
});
