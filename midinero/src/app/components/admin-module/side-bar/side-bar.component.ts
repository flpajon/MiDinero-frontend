import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Menu } from 'src/app/models/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  faAngleRight = faAngleRight;

  menuList: Menu[] = [];

  itemSelected: string = '';

  constructor(private menuService: MenuService, private router: Router) { }

  ngOnInit(): void {
    this.loadMenuList();
  }

  loadMenuList() {
    this.menuService.getMenuList().subscribe(response => {
      this.menuList = response.menuList.map(menuDTO => new Menu(menuDTO.menuName, menuDTO.menuEndpoint));
    });
  }

  goToEndpoint(endpoint: string) {
    endpoint = endpoint ?? null;
    if (endpoint && endpoint != '') {
      this.itemSelected = endpoint
      this.router.navigate([endpoint]);
    }
  }

}
