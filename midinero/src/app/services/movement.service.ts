import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovementAccountResponseDTO, MovementListResponseDTO, MovementsAccountStatusResponseDTO, NewMovementRequestDTO, NewMovementResponseDTO } from '../models/movement';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class MovementService {

  private currentAccountStatementSubject: Subject<MovementsAccountStatusResponseDTO> = new Subject<MovementsAccountStatusResponseDTO>();

  private accountHistoricalDaySubject: Subject<MovementAccountResponseDTO> = new Subject<MovementAccountResponseDTO>();

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  public currentAccountStatement(): Observable<MovementsAccountStatusResponseDTO> {
    return this.currentAccountStatementSubject.asObservable();
  }

  public accountHistoricalDay(): Observable<MovementAccountResponseDTO> {
    return this.accountHistoricalDaySubject.asObservable();
  }

  getHistoricalMovementList(): Observable<MovementListResponseDTO> {
    let currentUser = this.authenticationService.getCurrentUser() ?? null;
    let params = new HttpParams().set("userId", currentUser.userDTO.userId);
    return this.http.get<MovementListResponseDTO>(environment.API_MI_DINERO + 'movement/historical-list', { params: params });
  }

  getCurrentMovementList(): Observable<MovementListResponseDTO> {
    let currentUser = this.authenticationService.getCurrentUser() ?? null;
    let params = new HttpParams().set("userId", currentUser.userDTO.userId);
    return this.http.get<MovementListResponseDTO>(environment.API_MI_DINERO + 'movement/current-list', { params: params });
  }

  saveMovement(newMovementRequestDTO: NewMovementRequestDTO): Observable<NewMovementResponseDTO> {
    let currentUser = this.authenticationService.getCurrentUser() ?? null;
    newMovementRequestDTO.userId = currentUser.userDTO.userId;
    return this.http.post<NewMovementResponseDTO>(environment.API_MI_DINERO + 'movement/new', newMovementRequestDTO);
  }

  getCurrentAccountStatement(): void {
    let currentUser = this.authenticationService.getCurrentUser() ?? null;
    let params = new HttpParams().set("userId", currentUser.userDTO.userId);
    this.http.get<MovementsAccountStatusResponseDTO>(environment.API_MI_DINERO + 'movement/currentAccountState', { params: params })
      .subscribe(response => {
        this.currentAccountStatementSubject.next(response);
      });
  }

  getAccountHistoricalDay(): void {
    let currentUser = this.authenticationService.getCurrentUser() ?? null;
    let params = new HttpParams().set("userId", currentUser.userDTO.userId).set("filter", "DAY");
    this.http.get<MovementAccountResponseDTO>(environment.API_MI_DINERO + 'movement/accountState', { params: params })
      .subscribe(response => {
        this.accountHistoricalDaySubject.next(response);
      });
  }
}
