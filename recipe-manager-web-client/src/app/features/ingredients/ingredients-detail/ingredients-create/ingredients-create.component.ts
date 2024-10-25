import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { IngredientsFormComponent } from '../ingredients-form/ingredients-form.component';
import { Ingredient } from '../../model/ingredient';

@Component({
  selector: 'ingredients-create',
  templateUrl: './ingredients-create.component.html'
})
export class IngredientsCreateComponent {
  @ViewChild('formComponent') formComponent!: IngredientsFormComponent;
  @Output() saveIngredient = new EventEmitter<Ingredient>();

  saveClicked() {
    const formValue = this.formComponent.form.getRawValue();
    const ingredient = {
      name: formValue.name,
      unit: formValue.unit
    } as Ingredient;
    this.saveIngredient.emit(ingredient);
  }
}