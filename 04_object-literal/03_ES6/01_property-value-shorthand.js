/* property value shorthand */

var productName = "iPhone12 pro";
var price = 1000000;

// key value를 맞춰야 했었다
var product = {
    ProductName : productName,
    price : price
};
console.log(product); // { ProductName: 'iPhone12 pro', price: 1000000 }

// ES6
var product2 = {productName, price };
console.log(product2);