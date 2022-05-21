import { Component, OnInit } from '@angular/core';
import { faArrowDown, faArrowUp, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { Movement } from 'src/app/models/movement';
import { MovementType } from 'src/app/models/movement-type';
import { MovementService } from 'src/app/services/movement.service';

@Component({
  selector: 'app-historical-movement-list',
  templateUrl: './historical-movement-list.component.html',
  styleUrls: ['./historical-movement-list.component.scss']
})
export class HistoricalMovementListComponent implements OnInit {

  faUp = faArrowUp;
  faDown = faArrowDown;
  faMoneyBill = faMoneyBill;

  movementList: Array<Movement> = [];

  constructor(private movementService: MovementService) { }

  ngOnInit(): void {
    this.loadMovementList();
  }

  loadMovementList() {
    this.movementService.getHistoricalMovementList().subscribe(response => {
      if (response.stateMovement.statusCode == 0) {
        this.movementList = response.movementList.map(movementDTO => {
          return new Movement(movementDTO.movementDate, movementDTO.movementDescription, new MovementType(movementDTO.movementType.movementTypeId, movementDTO.movementType.movementTypeName, movementDTO.movementType.movementIsPositive), movementDTO.movementAmount)
        });
      }
    });
  }

}
