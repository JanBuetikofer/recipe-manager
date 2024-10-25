import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralPageComponent } from './components/general-page/general-page.component';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  declarations: [
    GeneralPageComponent,
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GeneralPageComponent,
    ModalComponent
  ]
})
export class SharedModule { }
