"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const product_model_1 = require("./product.model");
let ProductsService = class ProductsService {
    constructor() {
        this.products = [];
    }
    insertProduct(title, description, price) {
        const prodID = Math.random().toString();
        const prod = new product_model_1.Product(prodID, title, description, price);
        this.products.push(prod);
        return prodID;
    }
    fetchAllProducts() {
        return [...this.products];
    }
    fetchProduct(productID) {
        const product = this.products.find((prod) => prod.id === productID);
        if (!product) {
            throw new common_1.NotFoundException('Could not find data');
        }
        return { ...product };
    }
    updateProduct(prodID, prodTitle, prodDesc, prodPrice) {
        const prod = this.products.find((prod) => prod.id === prodID);
        if (!prod) {
            throw new common_1.NotFoundException('Could not find data you want to change');
        }
        if (prodTitle)
            prod.title = prodTitle;
        if (prodPrice)
            prod.price = prodPrice;
        if (prodDesc)
            prod.description = prodDesc;
    }
    deleteProduct(prodID) {
        const prodIndex = this.products.findIndex((prod) => prod.id === prodID);
        if (!prodIndex) {
            throw new common_1.NotFoundException('Could not find data you want to delete');
        }
        this.products.splice(prodIndex, 1);
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)()
], ProductsService);
//# sourceMappingURL=products.service.js.map