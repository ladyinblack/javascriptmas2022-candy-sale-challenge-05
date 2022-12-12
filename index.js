// Import stylesheets
import './style.css';
import { data } from './data.js';

const datac = data;

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Javascriptmas 2022</h1>`;
appDiv.innerHTML += `<h2>Candy Sale</h2>`;

/**
 * It's the day after Halloween 🎃 and all the candy is on sale!
 *
 * To buy up all the candy, use map() and filter() to put all the candy into a `shoppingCart` array.
 *
 * The new array should contain only the item and the price, like this:
 *
 * Expected output:
 * [
 *    { item: "🍭", price: 2.99 },
 *    { item: "🍫", price: 1.99 },
 *    { item: "🍬", price: 0.89 }
 * ]
 * 
 // for (let i = 0; i < data.length; i++) {
 //   if (data[i].type == 'sweet') {
 //     console.log(data[i].item, data[i].price);
 //   }
 // }
 * 
 */

function getSaleItems(data) {
  return data
    .filter((d) => d.type == 'sweet')
    .map((d) => ({
      item: d.item,
      price: d.price,
    }));
}

console.log(getSaleItems(datac));
