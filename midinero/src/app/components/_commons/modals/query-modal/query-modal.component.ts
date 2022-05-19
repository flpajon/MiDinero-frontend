import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-query-modal',
  templateUrl: './query-modal.component.html',
  styleUrls: ['./query-modal.component.scss']
})
export class QueryModalComponent implements OnInit {

  @Input() title: string = '';
  @Input() message: string = '';

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  close(result: boolean) {
    this.activeModal.close(result);
  }

}
