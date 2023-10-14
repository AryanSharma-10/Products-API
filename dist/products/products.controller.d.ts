import { ProductsService } from "./products.service";
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    addProduct(prodTitle: string, desc: string, price: number): any;
    getAllProducts(): import("./product.model").Product[];
    getProduct(prodID: string): {
        id: string;
        title: string;
        description: string;
        price: number;
    };
    updateProduct(prodID: string, prodTitle: string, prodDesc: string, prodPrice: number): any;
    deleteProduct(prodID: string): any;
}
