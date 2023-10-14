import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";
import { ProductsService } from "./products.service";


@Controller('products')
export class ProductsController {

    //We add a ProductsService type of data in order to inject into products controller class
    constructor(private readonly productsService: ProductsService) { }

    //Body is a decorator which allows us to extract info/fields of info from the body and use that info as parameters for the function
    @Post()
    addProduct(@Body('title') prodTitle: string, @Body('description') desc: string, @Body('price') price: number): any {

        const generatedID = this.productsService.insertProduct(prodTitle, desc, price);

        /* If we return the id directly, as it is string it will be treated as HTML and in an API we prefer to return data 
        as JSON therefore we will convert it into an object and return */
        return { id: generatedID };

    }

    @Get()
    getAllProducts() {

        //We can also return it as JSON if we prefer that
        return this.productsService.fetchAllProducts();

    }

    /* Since we need another get request we differentiate this by setting a dynamic segment by adding a colon (:) so that this 
    get query runs if there is a product id after the initial url e.g. domain-name.com/products/prouct-id, after that we import 
    the Param decorator to get the id in the path as a parameter
    */
    @Get(':id')
    getProduct(@Param('id') prodID: string) {
        return this.productsService.fetchProduct(prodID);
    }

    // We will get the product id from the url, dynammically and the other information as JSON which we will extract using the body decorator
    @Patch(':id')
    updateProduct(@Param('id') prodID: string,
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number
    ) {
        this.productsService.updateProduct(prodID, prodTitle, prodDesc, prodPrice);
        return null;
    }

    //We will get the productID of the product we want to delete from the url
    @Delete(':id')
    deleteProduct(@Param('id') prodID: string) {
        this.productsService.deleteProduct(prodID);
        return null;
    }
}