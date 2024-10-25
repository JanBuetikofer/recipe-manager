import { Component, OnInit } from '@angular/core';
import { IngredientService } from 'src/app/core/services/ingredient.service';
import { Ingredient } from '../model/ingredient';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IngredientsCreateComponent } from '../ingredients-detail/ingredients-create/ingredients-create.component';

@Component({
  templateUrl: './ingredients-list.component.html'
})
export class IngredientsListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(
    private ingredientsService: IngredientService,
    private router: Router,
    private modalService: NgbModal
  ) {
    
  }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    this.ingredientsService.getAllIngredients().subscribe(result => this.ingredients = result);
  }

  onDelete(ingredient: Ingredient) {
    console.log('delete')
    this.ingredientsService.deleteIngredient(ingredient).subscribe(() => {
      this.loadData();
    })
  }

  onEdit(ingredient: Ingredient) {
    this.router.navigate([`/ingredients/detail/${ingredient.id}`]);
  }

  onNew() {
    const modal = this.modalService.open(IngredientsCreateComponent, {size: 'lg'});

    modal.componentInstance.saveIngredient.subscribe((ingredient: Ingredient) => {
      this.ingredientsService.createIngredient(ingredient).subscribe({
        next: (value) => {
          modal.close();
          this.loadData();
        },
        error: () => console.error('save failed')
      });
    });
  }


}
