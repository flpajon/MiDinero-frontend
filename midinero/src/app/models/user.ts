import { PersonDTO } from "./person";
import { RoleDTO } from "./role";

export class UserDTO {
    userId: number;
    userName: string;
    userRole: RoleDTO;
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
