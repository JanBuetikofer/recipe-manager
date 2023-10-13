import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormControl} from '@angular/forms';
import { Location } from '@angular/common'
import { RecipeService } from 'src/app/core/services/recipe.service';
import { Ingredient } from 'src/app/ingredients/ingredient';
import { IngredientService } from 'src/app/core/services/ingredient.service';
import { RecipeDto } from '../recipe-dto';
import { IngredientsDto } from 'src/app/ingredients/ingredients-dto';
import {Observable} from 'rxjs';
import { startWith, debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
import { MatSelectChange } from '@angular/material/select';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  
  id:any = 0;
  recipeDto:RecipeDto = new RecipeDto();
  title:String = "Neues Rezept erfassen";
  newRecipe:boolean=true;
  availableIngredients:Ingredient[] = [];
  filteredIngredients:Ingredient[] = [];
  myControl = new FormControl();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService,
    private ingredientService: IngredientService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params["id"];
      if(this.id != 0 && this.id != 'new') {
        this.recipeService.getFullRecipe(this.id).subscribe(recipe => {
          this.recipeDto = recipe
          this.title = "Rezept bearbeiten";
          this.newRecipe = false;
        })
      }
    });
    this.ingredientService.getAllIngredients().subscribe(retVal => this.availableIngredients = retVal);
    this.filteredIngredients = this.availableIngredients;
    this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.availableIngredients.slice())),
    ).subscribe(values => this.filteredIngredients = values)
  }

  displayFn(user: Ingredient): string {
    return user && user.name.toString() ? user.name.toString() : '';
  }

  private _filter(name: String): Ingredient[] {
    const filterValue = name.toLowerCase();
    return this.availableIngredients.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  onBackNavigation() {
    this.location.back();
  }

  onEditNavigate() {
    if(this.newRecipe) {
      this.recipeService.createFullRecipe(this.recipeDto).subscribe(() => {});
    } else {
      this.recipeService.updateFullRecipe(this.recipeDto).subscribe(() => {});
    }
    this.router.navigate([`/recipes/list`]);
  }

  addNewIngredient() {
    //this.recipeDto.ingredients.push(new IngredientsDto());
    this.recipeDto.ingredients.unshift(new IngredientsDto());
  }

  onRemoveIngredient(ingredientsDto: IngredientsDto) {
    this.recipeDto.ingredients = this.recipeDto.ingredients.filter(ingredientFilter => ingredientFilter != ingredientsDto);
  }

  onIngredientChange(index:number) {
    this.recipeDto.ingredients[index].amount = 0;
  }

  compareObjects(o1: any, o2: any): boolean {
    return o1.name === o2.name && o1.id === o2.id;
  }
}