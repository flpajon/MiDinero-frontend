import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthenticationService } from "src/app/services/authentication.service";
import { environment } from "src/environments/environment";

@Injectable()
export class OnlyAdminGuard implements CanActivate {

    constructor(private authenticationService: AuthenticationService, private router: Router) { }

    canActivate() {
        let currentUser = this.authenticationService.getCurrentUser() ?? null;
        let result = currentUser && currentUser.userDTO.userRole.roleName == environment.ROLE_ADMIN;
        if (!result) {
            console.error('Unauthorized user');
        }
        return result;
    }

}