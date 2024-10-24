import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)},
  { path: 'ingredients', loadChildren: () => import('./features/ingredients/ingredients.module').then(m => m.IngredientsModule)},
  { path: 'recipes', loadChildren: () => import('./features/recipes/recipes.module').then(m => m.RecipesModule)},
  { path: 'planing', loadChildren: () => import('./features/planing/planing.module').then(m => m.PlaningModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
