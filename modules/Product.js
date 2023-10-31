/**
 * Product.js
 */

export default class Product {
    #name;
    #price;
    #quantity;
    #category;

    constructor(name,price,quantity,category) {
        this.#name = name;
        this.#price = price;
        this.#quantity = quantity;
        this.#category = category;
    }

    get name() {
        return this.#name;
    }

    set name(newName) {
        this.#name = newName;
    }

    get price() {
        return this.#price;
    }

    set price(newPrice) {
        this.#price = newPrice;
    }

    get quantity() {
        return this.#quantity;
    }

    set quantity(newQuantity) {
        this.#quantity = newQuantity;
    }

    get category() {
        return this.#category;
    }

    set category(newCategory) {
        this.#category = newCategory;
    }

    subtotal() {
        return this.#price * this.#quantity;
    }
}
