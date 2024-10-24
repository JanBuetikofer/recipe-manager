import { Ingredient } from "./ingredient";

export class IngredientsDto {
    amount:number=0;
    ingredient:Ingredient = {} as Ingredient;
}
