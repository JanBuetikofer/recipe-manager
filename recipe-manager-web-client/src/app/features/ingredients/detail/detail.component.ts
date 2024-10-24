import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'
import { Ingredient } from '../model/ingredient';
import { IngredientService } from 'src/app/core/services/ingredient.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {

  id: any = 0;
  ingredient: Ingredient = {} as Ingredient;
  title = 'Neue Zutat erfassen';
  newIngredient = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ingredientService: IngredientService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params["id"];
      if (this.id != 0 && this.id != 'new') {
        this.ingredientService.getIngredient(this.id).subscribe(ingredient => {
          this.ingredient = ingredient;
          this.title = "Zutat bearbeiten";
          this.newIngredient = false;
        })
      }
    })
  }

  onBackNavigation() {
    this.location.back();
  }

  onEditNavigate() {
    if (this.newIngredient) {
      this.ingredientService.createIngredient(this.ingredient).subscribe(() => { });
    } else {
      this.ingredientService.updateIngredient(this.ingredient).subscribe(() => { });
    }
    this.router.navigate([`/ingredients/list`]);
  }

}
