export class RoleDTO {
    roleId: number;
    roleName: string;

    constructor(roleId: number, roleName: string) {
        this.roleId = roleId;
        this.roleName = roleName;
    }
}
