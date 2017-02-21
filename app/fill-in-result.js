
export default function (element, data) {
  element.querySelector('.card__video__title').innerText = data.show_title;
  element.querySelector('.card__video__type').innerText = data.category;
  element.querySelector('.card__video__rate').innerText = data.rating;
  element.querySelector('.card__video__img').src = data.poster;
  element.querySelector('.card__summary__txt').innerText = data.summary;
  element.querySelector('.card__actors__txt').innerText = data.show_cast;
}
