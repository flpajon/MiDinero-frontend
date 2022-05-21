import { Component, OnInit } from '@angular/core';
import { faBan, faCircleCheck, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Person } from 'src/app/models/person';
import { ActivateUserRequestDTO, DeactivateUserRequestDTO, User } from 'src/app/models/user';
import { ModalService } from 'src/app/services/modal.service';
import { UserService } from 'src/app/services/user.service';
import { NewUserComponent } from '../new-user/new-user.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  faUserPlus = faUserPlus;
  faCircleCheck = faCircleCheck;
  faBan = faBan;

  userList: Array<User> = [];

  constructor(private userService: UserService, private modalService: NgbModal, private customModalService: ModalService) { }

  ngOnInit(): void {
    this.loadUserList();
  }

  loadUserList() {
    this.userService.getUserList().subscribe(response => {
      this.userList = response.userList.map(userDTO => new User(userDTO.userId, userDTO.userName, userDTO.userIsActive, new Person(userDTO.userPerson.personEmail, userDTO.userPerson.personName, userDTO.userPerson.personSurname)));
    });
  }

  openNewUserScreen() {
    let newUserModal = this.modalService.open(NewUserComponent, { backdrop: 'static', size: 'md', centered: true });
    newUserModal.result.then(result => {
      if (result) {
        this.loadUserList();
      }
    });
  }

  foActionItem(user: User) {
    if (user.userIsActive) {
      let title = 'Desactivar usuario';
      let message = '¿Está seguro que desea DESACTIVAR el usuario: ' + user.userName + ' ?'
      this.customModalService.openQueryModal(title, message).result.then(result => {
        if (result) {
          let deactivateUserRequestDTO = new DeactivateUserRequestDTO(user.userId);
          this.deactivateUser(deactivateUserRequestDTO);
        }
      });
    } else {
      let title = 'Activar usuario';
      let message = '¿Está seguro que desea ACTIVAR el usuario: ' + user.userName + ' ?'
      this.customModalService.openQueryModal(title, message).result.then(result => {
        if (result) {
          let activateUserRequestDTO = new ActivateUserRequestDTO(user.userId);
          this.activateUser(activateUserRequestDTO);
        }
      });
    }
  }

  activateUser(activateUserRequestDTO: ActivateUserRequestDTO) {
    this.userService.activeteUser(activateUserRequestDTO).subscribe(response => {
      this.customModalService.openInformationModal(response.stateActivateUser.statusMessage);
      if (response.stateActivateUser.statusCode == 0) {
        this.loadUserList();
      }
    });
  }

  deactivateUser(desactivateUserRequestDTO: DeactivateUserRequestDTO) {
    this.userService.deactiveteUser(desactivateUserRequestDTO).subscribe(response => {
      this.customModalService.openInformationModal(response.stateDeactivateUser.statusMessage);
      if (response.stateDeactivateUser.statusCode == 0) {
        this.loadUserList();
      }
    });
  }

}
