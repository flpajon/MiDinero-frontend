import { StateDTO } from "./common";
import { Person, PersonDTO } from "./person";
import { RoleDTO } from "./role";

export class User {
    userId: number;
    userName: string;
    userIsActive: boolean;
    userPerson: PersonDTO;

    constructor(userId: number, userName: string, userIsActive: boolean, userPerson: Person) {
        this.userId = userId
        this.userName = userName;
        this.userIsActive = userIsActive;
        this.userPerson = userPerson;
    }
}

export class UserDTO {
    userId: number;
    userName: string;
    userRole!: RoleDTO;
    userIsActive: boolean;
    userPerson: PersonDTO;

    constructor(userId: number, userName: string, userRole: RoleDTO, userIsActive: boolean, userPerson: PersonDTO) {
        this.userId = userId;
        this.userName = userName;
        this.userRole = userRole;
        this.userIsActive = userIsActive;
        this.userPerson = userPerson;
    }
}

export class UserListResponseDTO {
    stateUserList: StateDTO;
    userList: Array<UserDTO>;

    constructor(stateUserList: StateDTO, userList: Array<UserDTO>) {
        this.stateUserList = stateUserList;
        this.userList = userList;
    }
}

export class NewUserResponseDTO {
    stateNewUser: StateDTO;

    constructor(stateNewUser: StateDTO) {
        this.stateNewUser = stateNewUser;
    }
}

export class NewUserRequestDTO {
    userName: string;
    userPassword: string;
    personEmail: string;
    personName: string;
    personSurname: string;

    constructor(userName: string, userPassword: string, personEmail: string, personName: string, personSurname: string) {
        this.userName = userName;
        this.userPassword = userPassword;
        this.personEmail = personEmail;
        this.personName = personName;
        this.personSurname = personSurname;
    }
}

export class DeactivateUserRequestDTO {
    userId: number;

    constructor(userId: number) {
        this.userId = userId;
    }
}
export class DeactivateUserResponseDTO {
    stateDeactivateUser: StateDTO

    constructor(stateDeactivateUser: StateDTO) {
        this.stateDeactivateUser = stateDeactivateUser;
    }
}

export class ActivateUserRequestDTO {
    userId: number;

    constructor(userId: number) {
        this.userId = userId;
    }
}
export class ActivateUserResponseDTO {
    stateActivateUser: StateDTO

    constructor(stateActivateUser: StateDTO) {
        this.stateActivateUser = stateActivateUser;
    }
}