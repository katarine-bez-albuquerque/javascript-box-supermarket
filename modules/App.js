
/**
 * App.js
 */

// Imports
import Category from "./Category.js";
import Product from "./Product.js";
import Cart from "./Cart.js";

// Variables
const name_input = document.querySelector("#name");
const price_input = document.querySelector("#price");
const quantity_input = document.querySelector("#quantity");
const category_input = document.querySelector("#type");
const h3_total = document.querySelector(".total_value");
const btn_add = document.querySelector('#btn_add');
const btn_clear_list = document.querySelector('#btn_clear_list');
const ul = document.querySelector(".items");

// Instance classes
let category = "";
let product = "";
let cart = new Cart();

// Validate fields
function validate() {
    if (name_input.value === "" || price_input.value === "" || quantity_input.value === "" || category_input.value === "") {
        alert("Incorrect values! Fill in the fields!");
    }
    else {
        createCart();
    }
}

// Clear fields
function clear() {
    name_input.value = "";
    price_input.value = "";
    quantity_input.value = "";
    category_input.value = "";
}

// Calculate Products
function calculateProducts(products) {
    let calc = 0.0;
    products.forEach(product => {
        calc += product.subtotal();
    });
    return calc;
}

// Create Button
function createButton() {
    const button = document.createElement('button'); // Create
    button.classList.add('btn'); // Class name
    button.classList.add('btn_remove'); // Class name
    button.textContent = "Remove"; // Text button
    button.style.margin = "0 10px"; // Margin Style
    return button;
}

// Create Cart
function createCart() {
    let value = name_input.value; // Input value
    let categoryName = category_input.value; // Input value
    
    category = new Category(categoryName.toUpperCase()); // Category
    product = new Product(value.toUpperCase(), price_input.value.replace(",", "."), quantity_input.value, category); // Products
    product.subtotal(); // Subtotal
    
    cart.addProduct(product); // Add list

    viewProducts(); // Print products
}

function viewProducts() {
    let value = name_input.value; // Name input
  
    const li = cart.printProducts(value.toUpperCase()); // Class Cart Print Products
    const button = createButton(); // Function Create Button
    li.appendChild(button); // Add button on li
    ul.appendChild(li); // Add li to Ul

    button.addEventListener('click', () => removeCart(li)); // Button Remove

    let sum = calculateProducts(cart.products); // Function Calculate Products
    h3_total.textContent = sum.toFixed(2); // Print sum tag h3

    clear(); // Clean fields

    return ul; // return element parent
}

function removeCart(element) {
    cart.removeProduct(ul, element); // Remove product   
    let sum = calculateProducts(cart.products); // Function Calculate Products
    h3_total.textContent = sum.toFixed(2); // Print sum tag h3    
}

function removeAll() {
    cart.removeAll(ul); // Remove all product
    let sum = calculateProducts(cart.products); // Function Calculate Products
    h3_total.textContent = sum.toFixed(2); // Print sum tag h3
}

// Button Add
btn_add.addEventListener('click', () => {
    validate(); // Function Validate
});

// Button Clear List
btn_clear_list.addEventListener('click', () => {
    removeAll(); // Remove All
});
