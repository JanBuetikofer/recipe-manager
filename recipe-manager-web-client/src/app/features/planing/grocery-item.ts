import { Ingredient } from "../ingredients/model/ingredient";

export class GroceryItem {
    ingredient:Ingredient = {} as Ingredient;
    amount:number = 0;

    constructor(ingredient:Ingredient, amount:number) {
        this.ingredient = ingredient;
        this.amount = amount;
    }
}
