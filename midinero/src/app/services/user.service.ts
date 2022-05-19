import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ActivateUserRequestDTO, ActivateUserResponseDTO, DeactivateUserRequestDTO, DeactivateUserResponseDTO, NewUserRequestDTO, NewUserResponseDTO, UserListResponseDTO } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserList(): Observable<UserListResponseDTO> {
    return this.http.get<UserListResponseDTO>(environment.API_MI_DINERO + 'user/list');
  }

  saveUser(request: NewUserRequestDTO): Observable<NewUserResponseDTO> {
    return this.http.post<NewUserResponseDTO>(environment.API_MI_DINERO + 'user/new', request);
  }

  deactiveteUser(desactivateUserRequestDTO: DeactivateUserRequestDTO): Observable<DeactivateUserResponseDTO> {
    return this.http.post<DeactivateUserResponseDTO>(environment.API_MI_DINERO + 'user/deactivate', desactivateUserRequestDTO);
  }

  activeteUser(activateUserRequestDTO: ActivateUserRequestDTO): Observable<ActivateUserResponseDTO> {
    return this.http.post<ActivateUserResponseDTO>(environment.API_MI_DINERO + 'user/activate', activateUserRequestDTO);
  }
}
