import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Authentication, AuthenticationRequest, AuthenticationResponse } from '../models/authentication';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { StorageAppService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private storageService: StorageAppService) { }

  saveAuthentication(response: AuthenticationResponse) {
    let authentication: Authentication = new Authentication(response.token, response.bearer, response.userDTO);
    this.storageService.set(environment.CURRENT_USER, authentication);
  }

  login(request: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(environment.API_MI_DINERO + 'auth/login', request);
  }

  clearAuthentication() {
    this.storageService.clear();
  }

  getCurrentUser(): Authentication {
    return this.storageService.get(environment.CURRENT_USER);
  }
}
