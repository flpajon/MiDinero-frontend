import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovementTypeListResponseDTO } from '../models/movement-type';

@Injectable({
  providedIn: 'root'
})
export class MovementTypeService {

  constructor(private http: HttpClient) { }

  getMovementTypeList(): Observable<MovementTypeListResponseDTO> {
    return this.http.get<MovementTypeListResponseDTO>(environment.API_MI_DINERO + 'movement-type/list');
  }
}
