import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MenuListResponseDTO } from '../models/menu';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  getMenuList(): Observable<MenuListResponseDTO> {
    let currentUser = this.authenticationService.getCurrentUser() ?? null;
    let currentRoleName = currentUser.userDTO.userRole.roleName ?? null;
    let params = new HttpParams().set("roleName", currentRoleName)
    return this.http.get<MenuListResponseDTO>(environment.API_MI_DINERO + 'menu', { params: params });
  }
}
