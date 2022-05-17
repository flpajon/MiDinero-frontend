import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { Authentication } from "src/app/models/authentication";
import { StateDTO } from "src/app/models/common";
import { SpinnerService } from "src/app/services/spinner.service";
import { StorageAppService } from "src/app/services/storage.service";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

    constructor(private spinnerService: SpinnerService, private router: Router, private storageService: StorageAppService) { }

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
                    return throwError(error.statusMessage);
                }
                if (error.statusCode == 401) {
                    return throwError('Expedited or bad token.');
                }
                if (error.statusCode == 403) {
                    return throwError('Unauthorized user');
                }
                return throwError('Unknown error');
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
        }
        requestClone = request.clone();
        return requestClone;
    }
}