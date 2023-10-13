import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingredient } from '../../ingredients/ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private baseUrl = 'http://localhost:8080/api/v1/ingredients';

  constructor(
    private http:HttpClient,
  ) { }

  getAllIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.baseUrl);  
  }

  getIngredient(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createIngredient(ingredient: Ingredient): Observable<any>{
    return this.http.post(`${this.baseUrl}`, ingredient);
  }

  updateIngredient(ingredient: Ingredient): Observable<any>{
    return this.http.put(`${this.baseUrl}`, ingredient);
  }

  deleteIngredient(ingredient: Ingredient): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${ingredient.id}`);
  }
}
