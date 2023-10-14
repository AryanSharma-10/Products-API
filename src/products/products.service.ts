import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.model";
import { title } from "process";

@Injectable()
export class ProductsService {
    private products: Product[] = [];

    //The function will need to create a product class since the product title, description and price will be passed as parameters.
    insertProduct(title: string, description: string, price: number): string {

        //In order to create a product id we will create a random number to string (just a dummy example for id creation)
        const prodID = Math.random().toString();
        const prod = new Product(prodID, title, description, price);
        this.products.push(prod);

        //We return the productID we have created (dummy example)
        return prodID;
    }

    fetchAllProducts() {
        /* We cannot directly return the products using the code:
        => return this.products; 
        since we will return a reference/pointer to the products instead of a copy. */


        /*Using the spread operator (...) we pull out all the elements of the product array and 
        add them to the new array which we return, but the products inside the array are still 
        objects and therefore can be changed or edited since they are still references themselves, 
        if we want to copy them as well we will need to use the map function like => ...this.products.map */

        return [...this.products]

    }

    fetchProduct(productID: string) {
        //We will find the product mentioned in the parameter from the products array
        const product = this.products.find((prod) => prod.id === productID);

        //If product is not found we will throw an exception
        if (!product) {
            throw new NotFoundException('Could not find data');
        }

        return { ...product };
    }

    updateProduct(prodID: string, prodTitle: string, prodDesc: string, prodPrice: number) {
        const prod = this.products.find((prod) => prod.id === prodID);

        if (!prod) {
            throw new NotFoundException('Could not find data you want to change');
        }

        if (prodTitle)
            prod.title = prodTitle;

        if (prodPrice)
            prod.price = prodPrice;

        if (prodDesc)
            prod.description = prodDesc;
    }

    deleteProduct(prodID: string) {
        const prodIndex = this.products.findIndex((prod) => prod.id === prodID);

        if (!prodIndex) {
            throw new NotFoundException('Could not find data you want to delete');
        }

        this.products.splice(prodIndex, 1);
    }

}