import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NewUserRequestDTO } from 'src/app/models/user';
import { ModalService } from 'src/app/services/modal.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  submitted: boolean = false;
  noMatchPassword: boolean = false;

  showhideuserpass: string = 'password';
  showhideconfirmpass: string = 'password';

  faEye = faEye;

  formUser: FormGroup = new FormGroup({
    personEmail: new FormControl(null, [Validators.required]),
    personName: new FormControl(null, [Validators.required]),
    personSurname: new FormControl(null, [Validators.required]),
    userName: new FormControl(null, [Validators.required]),
    userPassword: new FormControl(null, [Validators.required])
  });

  constructor(private activeModal: NgbActiveModal, private userService: UserService, private modalService: ModalService) { }

  ngOnInit(): void {
    this.formUser.addControl('confirmPass', new FormControl(null, [Validators.required, this.validateAreEqual.bind(this)]));
  }

  get formControls() {
    return this.formUser.controls;
  }

  private validateAreEqual(fieldControl: FormControl) {
    return fieldControl.value == this.formUser.controls.userPassword.value ? null : {
      NotEqual: true
    };
  }

  saveNewUser() {
    this.submitted = false;
    console.log('FORM', this.formControls);

    if (!this.formUser.valid) {
      this.submitted = true;
      return;
    }
    console.log("Guardando...");
    let newUserRequestDTO = new NewUserRequestDTO(this.formControls.userName.value, this.formControls.userPassword.value, this.formControls.personEmail.value, this.formControls.personName.value, this.formControls.personSurname.value);
    this.userService.saveUser(newUserRequestDTO).subscribe(response => {
      if (response.stateNewUser.statusCode == 0) {
        this.close(true);
        this.modalService.openInformationModal(response.stateNewUser.statusMessage);
      } else {
        this.modalService.openInformationModal(response.stateNewUser.statusMessage);
      }
    });
  }

  changestatusconfirmpass() {
    if (this.showhideconfirmpass == "password") {
      this.showhideconfirmpass = "text";
    } else {
      this.showhideconfirmpass = "password"
    }
  }

  changestatususerpass() {
    if (this.showhideuserpass == "password") {
      this.showhideuserpass = "text";
    } else {
      this.showhideuserpass = "password"
    }
  }

  cleanConfirmPassword() {
    this.formUser.get("confirmPass")?.setValue(null);
  }

  back() {
    this.close(false);
  }

  close(result: boolean) {
    this.activeModal.close(result);
  }

}
