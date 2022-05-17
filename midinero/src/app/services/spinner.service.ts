import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor(private spinner: NgxSpinnerService) { }

  show() {
    this.spinner.show('primary', {
      size: 'medium'
    });
  }

  hide() {
    this.spinner.hide();
  }
}
