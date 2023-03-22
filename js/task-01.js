const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item')

console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
    const listTitle = item.querySelector('h2').textContent
    const numberOfCategories = item.querySelectorAll('li').length
    console.log(`Category: ${listTitle}`);
    console.log(`Elements: ${numberOfCategories}`);
})