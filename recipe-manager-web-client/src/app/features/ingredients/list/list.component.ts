import { Component, OnInit } from '@angular/core';
import { IngredientService } from 'src/app/core/services/ingredient.service';
import { Observable, map, of } from 'rxjs';
import { Ingredient } from '../ingredient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  ingredients$: Observable<Ingredient[]>;
  ingredients: Ingredient[] = [];

  constructor(
    private ingredientsService: IngredientService,
    private router: Router,
  ) {
    this.ingredients$ = ingredientsService.getAllIngredients();
    this.ingredients$.subscribe(result => this.ingredients = result);
  }

  ngOnInit(): void {

  }

  onDelete(ingredient: Ingredient) {
    this.ingredientsService.deleteIngredient(ingredient).subscribe(() => {
      this.ingredients = this.ingredients.filter(ingredientFilter => ingredientFilter != ingredient)
    })
  }

  onEdit(ingredient: Ingredient) {
    this.router.navigate([`/ingredients/detail/${ingredient.id}`]);
  }

  onNew() {
    this.router.navigate([`/ingredients/detail/new`]);
  }


}
