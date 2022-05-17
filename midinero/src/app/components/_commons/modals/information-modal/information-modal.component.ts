import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-information-modal',
  templateUrl: './information-modal.component.html',
  styleUrls: ['./information-modal.component.scss']
})
export class InformationModalComponent {

  @Input() message: string = '';

  constructor(private activeModal: NgbActiveModal) { }

  close() {
    this.activeModal.close();
  }

}
