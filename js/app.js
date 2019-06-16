'use strict';

// Cart constructor.
var Cart = function(items) {
  // this.items is an array of CartItem instances.
  this.items = items;
};


Cart.prototype.addItem = function(product, quantity) {
  // TODO: Fill in this instance method to create a new CartItem and add it to this.items
  var item = new CartItem(product,quantity);
  this.items.push(item);
};

Cart.prototype.saveToLocalStorage = function() {
  // TODO: Fill in this instance method to save the contents of the cart to localStorage
  localStorage.setItem('cart',JSON.stringify(this));
};

Cart.prototype.removeItem = function(index) {
  // TODO: Fill in this instance method to remove one item from the cart.
  // Note: You will have to decide what kind of parameter to pass in here!
  this.splice(index,1);

};

var CartItem = function(product, quantity) {
  this.product = product;
  this.quantity = quantity;
};

// Product contructor.
var Product = function(filePath, name) {
  this.filePath = filePath;
  this.name = name;
  allProducts.push(this);
};
var allProducts = [];

function generateCatalog() {
  new Product('img/bag.jpg', 'Bag');
  new Product('img/banana.jpg', 'Banana');
  new Product('img/bathroom.jpg', 'Bathroom');
  new Product('img/boots.jpg', 'Boots');
  new Product('img/breakfast.jpg', 'Breakfast');
  new Product('img/bubblegum.jpg', 'Bubblegum');
  new Product('img/chair.jpg', 'Chair');
  new Product('img/cthulhu.jpg', 'Cthulhu');
  new Product('img/dog-duck.jpg', 'Dog-Duck');
  new Product('img/dragon.jpg', 'Dragon');
  new Product('img/pen.jpg', 'Pen');
  new Product('img/pet-sweep.jpg', 'Pet Sweep');
  new Product('img/scissors.jpg', 'Scissors');
  new Product('img/shark.jpg', 'Shark');
  new Product('img/sweep.png', 'Sweep');
  new Product('img/tauntaun.jpg', 'Taun-Taun');
  new Product('img/unicorn.jpg', 'Unicorn');
  new Product('img/usb.gif', 'USB');
  new Product('img/water-can.jpg', 'Water Can');
  new Product('img/wine-glass.jpg', 'Wine Glass');
}

// Initialize the app by creating the big list of products with images and names
generateCatalog();


/* Create new element with images and append to col-2 */
var sectionEl = document.getElementsByClassName('col-1')[0];
var divEl = document.createElement('div');
divEl.setAttribute('id', "imageContainer");
for(var i = 0; i < allProducts.length; i++){
  var imgEl = document.createElement('img');
  imgEl.setAttribute('src', allProducts[i].filePath);
  imgEl.setAttribute('alt', allProducts[i].name);
  imgEl.setAttribute('title', allProducts[i].name);
  imgEl.setAttribute('height', 150);
  imgEl.setAttribute('width', 150);
  divEl.appendChild(imgEl);
}
sectionEl.appendChild(divEl);

/* Create new element for logo and append to header */
var headerEl = document.getElementsByTagName('header')[0];
console.log(headerEl);
var imgEl = document.createElement('img');
imgEl.setAttribute('id', 'lili');
imgEl.setAttribute('src', 'img/logo.png');
imgEl.setAttribute('alt', 'Cat Loaf');
imgEl.setAttribute('title', 'Cat Loaf');
headerEl.appendChild(imgEl);