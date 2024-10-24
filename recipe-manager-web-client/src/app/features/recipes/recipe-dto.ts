import { IngredientsDto } from "../ingredients/ingredients-dto";

export class RecipeDto {
    id: number = 0;
    name: String = '';
    ingredients:IngredientsDto[]=[];
}