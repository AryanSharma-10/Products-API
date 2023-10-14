import { Product } from "./product.model";
export declare class ProductsService {
    private products;
    insertProduct(title: string, description: string, price: number): string;
    fetchAllProducts(): Product[];
    fetchProduct(productID: string): {
        id: string;
        title: string;
        description: string;
        price: number;
    };
    updateProduct(prodID: string, prodTitle: string, prodDesc: string, prodPrice: number): void;
    deleteProduct(prodID: string): void;
}
