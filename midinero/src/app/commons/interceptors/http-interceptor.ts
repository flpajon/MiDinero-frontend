import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { Authentication } from "src/app/models/authentication";
import { StateDTO } from "src/app/models/common";
import { ModalService } from "src/app/services/modal.service";
import { SpinnerService } from "src/app/services/spinner.service";
import { StorageAppService } from "src/app/services/storage.service";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

    constructor(private modalService: ModalService, private spinnerService: SpinnerService, private router: Router, private storageService: StorageAppService) { }

    pendings: number = 0;

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let timeout = setTimeout(() => {
            this.spinnerService.show();
        }, 100);

        this.pendings = this.pendings + 1;

        request = request.clone();

        return next.handle(this.addToken(request)).pipe(
            finalize(() => {
                clearTimeout(timeout);
                this.pendings = this.pendings - 1;
                if (this.pendings == 0) {
                    this.spinnerService.hide();
                }
            }),
            catchError(response => {
                let error: StateDTO = response.error;
                if (error.statusCode == 500) {
                    this.modalService.openInformationModal(error.statusMessage);
                    return throwError(error.statusMessage);
                }
                if (error.statusCode == 401) {
                    let message = 'Expedited or bad token'
                    this.modalService.openInformationModal(message);
                    return throwError(message);
                }
                if (error.statusCode == 403) {
                    let message = 'Unauthorized user'
                    this.modalService.openInformationModal(message);
                    return throwError(message);
                }
                let message = 'Conection problems'
                this.modalService.openInformationModal(message);
                return throwError(message);
            }));
    }

    addToken(request: HttpRequest<any>): HttpRequest<any> {
        let currentUser: Authentication = this.storageService.get(environment.CURRENT_USER) ?? null;
        let requestClone: HttpRequest<any>;
        if (currentUser) {
            requestClone = request.clone({
                setHeaders: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: currentUser.token
                }
            });
            return requestClone;
        }
        requestClone = request.clone();
        return requestClone;
    }
}