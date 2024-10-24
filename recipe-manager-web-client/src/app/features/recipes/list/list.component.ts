import { Component, OnInit } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Recipe } from '../recipe';
import { RecipeService } from '../../../core/services/recipe.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  recipes$: Observable<Recipe[]>;
  recipes: Recipe[] = [];

  constructor(
    private recipeService: RecipeService,
    private router: Router,
  ) {
    this.recipes$ = recipeService.getAllRecipes();
    this.recipes$.subscribe(result => this.recipes = result);
  }

  ngOnInit(): void {

  }

  onDelete(recipe: Recipe) {
    this.recipeService.deleteRecipe(recipe).subscribe(() => {
      this.recipes = this.recipes.filter(recipeFilter => recipeFilter != recipe)
    })
  }

  onEdit(recipe: Recipe) {
    this.router.navigate([`/recipes/detail/${recipe.id}`]);
  }

  onNew() {
    this.router.navigate([`/recipes/detail/new`]);
  }

}
