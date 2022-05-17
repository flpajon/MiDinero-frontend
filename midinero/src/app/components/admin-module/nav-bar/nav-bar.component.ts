import { Component, OnInit } from '@angular/core';
import { Authentication } from 'src/app/models/authentication';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  currentUser!: Authentication;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.currentUser = this.authenticationService.getCurrentUser();
  }

}
