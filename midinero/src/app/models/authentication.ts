import { StateDTO } from "./common";
import { UserDTO } from "./user";

export class Authentication {
    token: string;
    userDTO: UserDTO

    constructor(token: string, bearer: string, userDTO: UserDTO) {
        this.token = bearer + ' ' + token;
        this.userDTO = userDTO;
    }
}

export class AuthenticationRequest {
    userName: string;
    password: string;

    constructor(userName: string, password: string) {
        this.userName = userName;
        this.password = password;
    }
}

export class AuthenticationResponse {
    stateAuthentication: StateDTO;
    token: string;
    bearer: string;
    userDTO: UserDTO

    constructor(stateAuthentication: StateDTO, token: string, bearer: string, userDTO: UserDTO) {
        this.stateAuthentication = stateAuthentication;
        this.token = token;
        this.bearer = bearer;
        this.userDTO = userDTO;
    }
}