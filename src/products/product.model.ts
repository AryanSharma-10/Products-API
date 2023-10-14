export class Product {
    /*
    Instead of the following: 
    id: string;
    title: string;
    description: string;
    price: number;

    constructor(id: string, title: string, description: string, price: number) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;

    }

    We can write the below code to achieve DRY:
    */

    // We can add access modifier directly to the parameters in the function
    constructor(public id: string, public title: string, public description: string, public price: number) { }


}