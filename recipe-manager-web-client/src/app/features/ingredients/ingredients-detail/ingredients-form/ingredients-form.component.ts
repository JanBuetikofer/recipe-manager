import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../../model/ingredient';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ingredients-form',
  templateUrl: './ingredients-form.component.html'
})
export class IngredientsFormComponent implements OnInit {
  @Input() title!: string;
  @Input() ingredient?: Ingredient;
  form!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {

  }
  ngOnInit(): void {
      this.initForm();
  }

  private initForm() {
    this.form = this.fb.group({
      id: [this.ingredient ? this.ingredient.id : null],
      name: [this.ingredient ? this.ingredient.name : ''],
      unit: [this.ingredient ? this.ingredient.unit : '']
    });
  }
}
