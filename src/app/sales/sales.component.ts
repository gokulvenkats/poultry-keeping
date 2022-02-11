import { Component, OnInit } from '@angular/core';
import { SalesMenu } from "./sales.model";
import { SalesService } from "./sales.service";

@Component({
  selector: 'poultry-sales',
  templateUrl: './sales.component.html',
  styles: [
  ]
})
export class SalesComponent implements OnInit {

  salesMenu: SalesMenu[] = [];

  constructor(private saleService: SalesService) { }

  ngOnInit(): void {
    this.salesMenu = this.saleService.getSalesMenu();
  }

}
