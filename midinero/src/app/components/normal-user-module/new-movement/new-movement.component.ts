import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NewMovementRequestDTO } from 'src/app/models/movement';
import { MovementType, MovementTypeDTO } from 'src/app/models/movement-type';
import { ModalService } from 'src/app/services/modal.service';
import { MovementTypeService } from 'src/app/services/movement-type.service';
import { MovementService } from 'src/app/services/movement.service';

@Component({
  selector: 'app-new-movement',
  templateUrl: './new-movement.component.html',
  styleUrls: ['./new-movement.component.scss']
})
export class NewMovementComponent implements OnInit {

  faSortDown = faSortDown;

  submitted: boolean = false;

  constructor(private movementService: MovementService, private movementTypeService: MovementTypeService, private activeModal: NgbActiveModal, private modalService: ModalService) { }

  movementTypeList: Array<MovementType> = [];

  formMovement: FormGroup = new FormGroup({
    movementType: new FormControl(null, [Validators.required]),
    movementAmount: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]+([.][0-9]+)?$')]),
    movementDescription: new FormControl(null, [Validators.required])
  });

  ngOnInit(): void {
    this.loadMomementTypeList();
  }

  get formControls() {
    return this.formMovement.controls;
  }

  loadMomementTypeList() {
    this.movementTypeService.getMovementTypeList().subscribe(response => {
      if (response.stateMovementType.statusCode == 0) {
        this.movementTypeList = response.movementTypeList.map(movementTypeDTO => {
          return new MovementType(movementTypeDTO.movementTypeId, movementTypeDTO.movementTypeName, movementTypeDTO.movementIsPositive)
        });
        this.formControls.movementType.setValue(this.movementTypeList[0]);
      }
    });
  }

  saveNewMovement() {
    this.submitted = false;
    if (!this.formMovement.valid) {
      this.submitted = true;
      return;
    }
    let newMovementRequestDTO = new NewMovementRequestDTO(this.formControls.movementDescription.value, new MovementTypeDTO(
      this.formControls.movementType.value.movementTypeId, this.formControls.movementType.value.movementTypeName, this.formControls.movementType.value.movementIsPositive), this.formControls.movementAmount.value);
    this.movementService.saveMovement(newMovementRequestDTO).subscribe(response => {
      if (response.stateNewMovement.statusCode == 0) {
        this.close(true);
        this.modalService.openInformationModal(response.stateNewMovement.statusMessage);
      }
    });
  }

  back() {
    this.close(false);
  }

  close(result: boolean) {
    this.activeModal.close(result);
  }

  onIconClick(movementType: any) {
    movementType.click();
  }
}
