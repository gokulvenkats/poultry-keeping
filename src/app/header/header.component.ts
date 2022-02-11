import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poultry-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  hideUserMenu: Boolean = true;
  menuBarShow: Boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

  userMenuClick(): void {
    this.hideUserMenu = !this.hideUserMenu;
  }

  menuBarClick(): void {
    this.menuBarShow = !this.menuBarShow;
  }

}
