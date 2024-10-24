import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { MatSelectChange } from '@angular/material/select';
import { Recipe } from 'src/app/features/recipes/recipe';
import { RecipeOrder } from '../recipe-order';
import { GroceryItem } from '../grocery-item';
import { IngredientsDto } from 'src/app/features/ingredients/ingredients-dto';
import { TodoService } from 'src/app/core/services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: String = "Menuplan erstellen";
  availableMenus: Recipe[] = [];
  chosenMenus: RecipeOrder[] = [];
  amount: number = 0;
  chosenRecipe: Recipe = new Recipe();
  groceryList: GroceryItem[] = [];
  reducedGroceryList: GroceryItem[] = [];
  bearer_token: String = "";
  todosCreated: boolean = false;
  percentage_done: number = 0;


  constructor(
    private recipeService: RecipeService,
    private todoService: TodoService,
  ) { }

  ngOnInit(): void {
    this.recipeService.getAllRecipes().subscribe(recipes => {
      this.availableMenus = recipes;
      this.chosenRecipe = this.availableMenus[0];
      this.amount = 0;
    });

  }

  addNewRecipeOrder() {
    if (this.amount !== 0) {
      this.availableMenus = this.availableMenus.filter(recipeFilter => recipeFilter != this.chosenRecipe);
      this.chosenMenus.unshift(new RecipeOrder(this.chosenRecipe, this.amount));
      this.chosenRecipe = this.availableMenus[0];
      this.amount = 0;
    }
  }

  removeChosenMenu(recipeOrder: RecipeOrder) {
    this.availableMenus.push(recipeOrder.recipe);
    this.chosenMenus = this.chosenMenus.filter(recipeFilter => recipeFilter != recipeOrder);
  }

  compareObjects(o1: any, o2: any): boolean {
    return o1.name === o2.name && o1.id === o2.id;
  }

  onRecipeChange(event: MatSelectChange, index: number) {
    this.chosenMenus[index].recipe = event.value;
  }

  createGroceryList() {
    this.groceryList = [];
    this.chosenMenus.forEach(chosenMenu => {
      this.recipeService.getFullRecipe(chosenMenu.recipe.id).subscribe(fullRecipe => {
        fullRecipe.ingredients.forEach((ingredient: IngredientsDto) => {
          if (this.groceryList.some(groceryItem => JSON.stringify(groceryItem.ingredient) === JSON.stringify(ingredient.ingredient))
          ) {
            this.groceryList.forEach(groceryItem => {
              if (JSON.stringify(groceryItem.ingredient) === JSON.stringify(ingredient.ingredient)) {
                groceryItem.amount += ingredient.amount * chosenMenu.amount;
              }
            })
          } else {
            this.groceryList.push(new GroceryItem(ingredient.ingredient, ingredient.amount * chosenMenu.amount));
          }
        })
      });
    });

  }

  createTodoItems() {
    var interval = 100;
    this.groceryList.forEach((groceryItem, index) => {
      setTimeout(() => {
        this.todoService.createTodoItem(`${groceryItem.amount} ${groceryItem.ingredient.unit} ${groceryItem.ingredient.name}`, this.bearer_token).subscribe();
        this.percentage_done = (index + 1) * 100 / this.groceryList.length;
      }, index * interval
      );
    });
    this.todosCreated = true;
  }

}