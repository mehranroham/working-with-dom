// // const input = document.querySelector('#input-text');

// // input.value = input.getAttribute('id');

// // const li = document.querySelector('li:last-of-type');

// // li.textContent += ' changed!';

// const li = document.querySelector('li');

// // console.log(ul.children[1]);
// // console.log(ul.childNodes);

// console.log(li.closest('div'));

// const ul = li.parentElement;

// console.log(ul);

// console.log(ul.previousElementSibling);

// // innerHTML causes the rerender of the hole element

// const div = document.querySelector('div');

// // browser support ok
// div.insertAdjacentHTML('afterbegin', '<h1>test afet beggin</h1>');
// div.insertAdjacentHTML('afterend', '<h2>mahdi injast</h2>');

// const newLi = document.createElement('li');

// newLi.innerHTML = 'hello';

// ul.prepend(newLi);

// // problem with safari
// ul.lastElementChild.before(newLi);
// ul.lastElementChild.after(newLi);

// ul.lastElementChild.replaceWith(newLi);

// const newli2 = newLi.cloneNode(true);

// ul.append(newLi, newli2);

// // ul.parentElement.removeChild(ul);

const addbtn = document.querySelector('header').children[1];
const addModal = document.querySelector('#add-modal');
const backdrop = document.querySelector('#backdrop');
const canclebtn = document.querySelector('#cancle--btn');
const addMovieList = document.querySelector('#success-btn');
const inputs = document.querySelectorAll('input');

const checkDeleteModal = document.querySelector('#delete-modal');

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');

  if (
    !backdrop.classList.contains('visible') &&
    addModal.classList.contains('visible')
  ) {
    addModal.classList.remove('visible');
  }
};

const toggleAddModal = () => {
  addModal.classList.toggle('visible');

  toggleBackdrop();

  for (const input of inputs) {
    input.value = '';
  }
};

addbtn.addEventListener('click', () => {
  toggleAddModal();
});

backdrop.addEventListener('click', () => {
  toggleAddModal();
});

canclebtn.addEventListener('click', () => {
  toggleAddModal();
});

let movieList = document.getElementById('movie-list');

const movies = [];
let enteredName;
let enteredurl;
let enteredrating;
let id;

const startDeleteHandler = (id) => {
  checkDeleteModal.classList.add('visible');
  backdrop.classList.add('visible');

  //   -------------------------------------------------
  let btnPassive = document.querySelector('#btn--passive');
  let btnDanger = document.querySelector('#btn--danger');

  btnPassive.replaceWith(btnPassive.cloneNode(true));
  btnDanger.replaceWith(btnDanger.cloneNode(true));

  btnPassive = document.querySelector('#btn--passive');
  btnDanger = document.querySelector('#btn--danger');
  //   -------------------------------------------------

  btnPassive.addEventListener('click', () => {
    backdrop.classList.remove('visible');
    checkDeleteModal.classList.remove('visible');
  });

  btnDanger.addEventListener('click', () => {
    let selectedIndex;
    for (const [index, value] of movies.entries()) {
      if (value.id == id) selectedIndex = index;
    }

    movieList.children[selectedIndex].remove();
    movies.splice(selectedIndex, 1);

    if (movies.length == 0) {
      document.querySelector('#entry-text').classList.remove('hidden');
    }

    toggleBackdrop();
    checkDeleteModal.classList.remove('visible');
  });
};

// const deleteHandler = (id) => {

// };

addMovieList.addEventListener('click', () => {
  if (
    inputs[0].value.trim() === '' ||
    inputs[1].value.trim() === '' ||
    inputs[2].value.trim() === '' ||
    inputs[2].value.trim() > 5 ||
    inputs[2].value.trim() <= 0
  ) {
    alert('plz insert the currect values. rating must be 1 to 5');
  } else {
    enteredName = inputs[0].value;
    enteredurl = inputs[1].value;
    enteredrating = inputs[2].value;
    id = Math.random();
    movies.push({ enteredName, enteredurl, enteredrating, id });

    const liEl = document.createElement('li');
    liEl.className = 'movie-element';
    liEl.innerHTML = `
  <div class="movie-element__image">
    <img src="${enteredurl}" alt="${enteredName}">
  </div>
  <div class="movie-element__info">
    <h2>${enteredName}</h2>
    <p>${enteredrating}/5 stars</p>
  </div>
`;
    liEl.addEventListener('click', startDeleteHandler.bind(null, id));
    movieList.append(liEl);
    document.querySelector('#entry-text').classList.add('hidden');
    toggleAddModal();
  }
});

// check delete modal
