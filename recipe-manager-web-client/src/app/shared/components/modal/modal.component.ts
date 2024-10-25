import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal-wrapper',
  templateUrl: './modal.component.html'
})
export class ModalComponent {
  @Input() title!: string;
  @Output() saveClicked = new EventEmitter<null>();
  activeModal = inject(NgbActiveModal);

  closeModal() {
    this.activeModal.close();
  }

  save() {
    this.saveClicked.emit();
  }
}
