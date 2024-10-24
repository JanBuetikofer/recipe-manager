import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/features/recipes/recipe';
import { RecipeDto } from 'src/app/features/recipes/recipe-dto';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private baseUrl = 'http://localhost:8080/api/v1/recipes';

  constructor(
    private http:HttpClient,
  ) { }

  getAllRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.baseUrl);  
  }
  
  getRecipe(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getFullRecipe(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}/full`);
  }

  updateRecipe(recipe: Recipe) {
    return this.http.put(`${this.baseUrl}`, recipe);
  }

  updateFullRecipe(recipeDto: RecipeDto) {
    return this.http.put(`${this.baseUrl}/full`, recipeDto);
  }
  
  createRecipe(recipe: Recipe) {
    return this.http.post(`${this.baseUrl}`, recipe);
  }

  createFullRecipe(recipeDto: RecipeDto) {
    return this.http.post(`${this.baseUrl}/full`, recipeDto);
  }

  deleteRecipe(recipe: Recipe) {
    return this.http.delete(`${this.baseUrl}/${recipe.id}`);
  }
}
