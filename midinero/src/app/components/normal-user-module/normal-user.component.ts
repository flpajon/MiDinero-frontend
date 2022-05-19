import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-normal-user',
  templateUrl: './normal-user.component.html',
  styleUrls: ['./normal-user.component.scss']
})
export class NormalUserComponent implements OnInit {

  statusSideBar: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
