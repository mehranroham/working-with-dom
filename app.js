// const input = document.querySelector('#input-text');

// input.value = input.getAttribute('id');

// const li = document.querySelector('li:last-of-type');

// li.textContent += ' changed!';

const li = document.querySelector('li');

// console.log(ul.children[1]);
// console.log(ul.childNodes);

console.log(li.closest('div'));

const ul = li.parentElement;

console.log(ul);

console.log(ul.previousElementSibling);

// innerHTML causes the rerender of the hole element

const div = document.querySelector('div');

// browser support ok
div.insertAdjacentHTML('afterbegin', '<h1>test afet beggin</h1>');
div.insertAdjacentHTML('afterend', '<h2>mahdi injast</h2>');

const newLi = document.createElement('li');

newLi.innerHTML = 'hello';

ul.prepend(newLi);

// problem with safari
ul.lastElementChild.before(newLi);
ul.lastElementChild.after(newLi);

ul.lastElementChild.replaceWith(newLi);

const newli2 = newLi.cloneNode(true);

ul.append(newLi, newli2);

// ul.parentElement.removeChild(ul);
