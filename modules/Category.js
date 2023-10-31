/**
 * Category.js
 */

export default class Category {
    #name;

    constructor(name) {
        this.#name = name;
    }

    get name() {
        return this.#name;
    }

    set name(newName) {
        this.#name = newName;
    }
}
