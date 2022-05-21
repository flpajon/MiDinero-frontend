import { Component, OnInit } from '@angular/core';
import { faArrowDown, faArrowUp, faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Movement } from 'src/app/models/movement';
import { MovementType } from 'src/app/models/movement-type';
import { MovementService } from 'src/app/services/movement.service';
import { NewMovementComponent } from '../new-movement/new-movement.component';

@Component({
  selector: 'app-current-movement-list',
  templateUrl: './current-movement-list.component.html',
  styleUrls: ['./current-movement-list.component.scss']
})
export class CurrentMovementListComponent implements OnInit {

  faUp = faArrowUp;
  faDown = faArrowDown;
  faMoneyBill = faCircleDollarToSlot;

  movementList: Array<Movement> = [];

  constructor(private movementService: MovementService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadMovementList();
  }

  loadMovementList() {
    this.movementService.getCurrentMovementList().subscribe(response => {
      if (response.stateMovement.statusCode == 0) {
        this.movementList = response.movementList.map(movementDTO => {
          return new Movement(movementDTO.movementDate, movementDTO.movementDescription, new MovementType(movementDTO.movementType.movementTypeId, movementDTO.movementType.movementTypeName, movementDTO.movementType.movementIsPositive), movementDTO.movementAmount)
        });
      }
    });
  }

  openNewMovementScreen() {
    let newUserModal = this.modalService.open(NewMovementComponent, { backdrop: 'static', size: 'md', centered: true });
    newUserModal.result.then(result => {
      if (result) {
        this.reloadCurrentAccountStatement();
        this.loadMovementList();
      }
    });
  }
  
  reloadCurrentAccountStatement() {
    this.movementService.getCurrentAccountStatement();
  }

}
