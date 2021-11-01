// First task
const arrowOfItemsEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${arrowOfItemsEl.length}`);

// Second task
for (const item of arrowOfItemsEl) {
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelectorAll('li').length}`);
}