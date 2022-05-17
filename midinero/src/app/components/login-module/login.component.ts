import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationRequest } from 'src/app/models/authentication';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ModalService } from 'src/app/services/modal.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted: boolean = false;

  formLogin: FormGroup = new FormGroup({
    user: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  });

  constructor(private authenticationService: AuthenticationService, private modalService: ModalService, private router: Router) { }

  ngOnInit(): void {
    this.authenticationService.clearAuthentication();
  }

  get formControls() {
    return this.formLogin.controls;
  }

  login() {
    this.submitted = false;
    if (!this.formLogin.valid) {
      this.submitted = true;
      return;
    }
    let request: AuthenticationRequest = new AuthenticationRequest(this.formControls.user.value, this.formControls.password.value);
    this.authenticationService.login(request).subscribe(response => {
      if (response.stateAuthentication.statusCode == 0) {
        this.authenticationService.saveAuthentication(response);
        if (response.userDTO.userRole.roleName == environment.ROLE_ADMIN) {
          this.router.navigate(['admin']);
        }
        if (response.userDTO.userRole.roleName == environment.ROLE_NORMAL) {
          this.router.navigate(['user']);
        }
      } else {
        this.modalService.openInformationModal(response.stateAuthentication.statusMessage);
      }
    });
  }

}
