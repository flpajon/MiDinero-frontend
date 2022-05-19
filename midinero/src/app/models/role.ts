interface IRoleDTO {
    roleId: number;
    roleName: string;

}

export class RoleDTO {
    roleId: number;
    roleName: string;

    constructor(roleId?: number, roleName?: string) {
        this.roleId = roleId || 0;
        this.roleName = roleName || '';
    }
}
