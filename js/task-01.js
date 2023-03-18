const categories = document.querySelector('#categories');
// const items = document.querySelectorAll('.item')
const items = categories.querySelectorAll('.item')
// console.log(`this is Categores ${categories}`);
// console.log(`this is Item ${items}`);
// console.log(`this is Test ${test}`);
// console.log(categories.lenght)
console.log(`Number of categories: ${items.length}`);
items.forEach((item) => {
    const listTitle = item.querySelector('h2').textContent
    const numberOfCategories = item.querySelectorAll('li').length
    console.log(`Category: ${listTitle}`);
    console.log(`Elements: ${numberOfCategories}`);
})