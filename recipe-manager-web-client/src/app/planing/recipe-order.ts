import { Recipe } from "../recipes/recipe";

export class RecipeOrder {
    recipe:Recipe=new Recipe();
    amount:number=0;

    constructor(recipe:Recipe, amount:number) {
        this.recipe = recipe;
        this.amount = amount;
    }
}
