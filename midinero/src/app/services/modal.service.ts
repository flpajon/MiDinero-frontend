import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InformationModalComponent } from '../components/_commons/modals/information-modal/information-modal.component';
import { QueryModalComponent } from '../components/_commons/modals/query-modal/query-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modal: NgbModal) { }

  openInformationModal(message: string) {
    let informationModal = this.modal.open(InformationModalComponent, { backdrop: 'static', size: 'sm', centered: true });
    informationModal.componentInstance.message = message;
  }

  openQueryModal(title: string, message: string) {
    let queryModal = this.modal.open(QueryModalComponent, { backdrop: 'static', size: 'sm', centered: true });
    queryModal.componentInstance.title = title;
    queryModal.componentInstance.message = message;
    return queryModal;
  }
}
