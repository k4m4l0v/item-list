import { makeAutoObservable } from "mobx";

export default class ProductsStore {
    constructor() {
        this._products = [];
        this._page = 1;
        this._limit = 50;
        this._brand = '';
        this._name = '';
        this._minPrice = 0;
        this._maxPrice = 1000000;

        makeAutoObservable(this);
    }

    resetProducts(products) {
        this._products = products;
    }

    setProducts(products) {
        this._products.push(products);
    }

    setPage(page) {
        this._page = page;
    }
    
    setBrand(brand) {
        this._brand = brand;
    }

    setName(name) {
        this._name = name;
    }

    setMinPrice(minPrice) {
        this._minPrice = minPrice;
    }

    setMaxPrice(maxPrice) {
        this._maxPrice = maxPrice;
    }
    
    get products() {
        return this._products;
    }

    get page() {
        return this._page;
    }

    get limit() {
        return this._limit;
    }

    get brand() {
        return this._brand;
    }

    get name() {
        return this._name;
    }

    get minPrice() {
        return this._minPrice;
    }

    get maxPrice() {
        return this._maxPrice;
    }
}
