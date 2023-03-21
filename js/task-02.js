const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const orderedList = document.querySelector('#ingredients');

ingredients.forEach((item) => {
  const createList = document.createElement('li')
  createList.classList.add('item')
  createList.textContent = item
  orderedList.appendChild(createList)
})
// createList.classList.add('item')
// createList.textContent = item
// orderedList.appendChild(createList)