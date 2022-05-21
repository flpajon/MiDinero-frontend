import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { Authentication } from 'src/app/models/authentication';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  faSortDown = faSortDown;

  currentUser!: Authentication;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.authenticationService.getCurrentUser();
  }

  goToLogin(){
    this.router.navigate(['login'])
  }
}
