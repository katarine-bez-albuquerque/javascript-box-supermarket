/**
 * Cart.js
 */

export default class Cart {
    #products;
    #product;

    constructor() {
        this.#products = []; // start empty
    }

    get products() {
        return this.#products;
    }

    get product() {
        return this.#product;
    }

    addProduct(product) {
        this.#products.push(product);
    }

    removeProduct(parent, element) {        
        let product = this.#findProduct(); // Search product
        if(product !== "") { // if different from empty
            let index = this.products.indexOf(product); // Search index product
            if(index >= 0) {  // if index greater than zero              
                this.#removeElement(parent, element); // Remove tag li html
                this.#removeItem(index); // Remove product from list
            }
        }
        else {
            alert("Product does not match!"); //if empty
        }
    }

    #findProduct() {
        return this.products.find(x => (x.name === this.product) ? x.name : "");
    }

    #removeItem(product) {
        this.products.splice(product, 1); // Remove select product
    }

    #removeElement(parent, element) {
        parent.removeChild(element); // Remove tag li
    }

    removeAll(parent) {
        while (parent.firstElementChild) {
            parent.removeChild(parent.firstElementChild); // Remove tags li
        }
        this.products.length = 0; // clean array products
    }

    printProducts(value) {
        const li = document.createElement('li'); // Create tag
        li.classList.add('item'); // Add class name
        li.style.cursor = "pointer"; // Add Cursor Style

        this.products.forEach(product => {
            li.textContent = "Qtd. " 
            + product.quantity 
            + " - " 
            + product.name.toUpperCase() 
            + " - " 
            + product.category.name.toUpperCase() 
            + " - $ "
            + Number(product.price).toFixed(2) 
            + " - Subtotal: $ " 
            + product.subtotal().toFixed(2);

            if (value === product.name.toUpperCase()) { // if product equal to li tag value
                li.addEventListener('click', () => {
                    //console.log(product.name.toUpperCase());
                    this.#product = product.name.toUpperCase(); // set name product
                });
            }
        });
        return li;
    }
}
