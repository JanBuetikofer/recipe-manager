import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IngredientsRoutingModule } from './ingredients-routing.module';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { DetailComponent } from './detail/detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IngredientsFormComponent } from './ingredients-detail/ingredients-form/ingredients-form.component';
import { IngredientsCreateComponent } from './ingredients-detail/ingredients-create/ingredients-create.component';


@NgModule({
  declarations: [
    IngredientsListComponent,
    IngredientsFormComponent,
    IngredientsCreateComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    IngredientsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class IngredientsModule { }
