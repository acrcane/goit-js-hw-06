const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const orderedList = document.querySelector('#ingredients')

const listItems = ingredients.map((item) => {
  const listItem = document.createElement('li')
  listItem.textContent = item;
  listItem.classList.add('item');
  return listItem
});

orderedList.append(...listItems);