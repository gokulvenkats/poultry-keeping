import { Injectable } from '@angular/core';
import { SalesMenu } from "./sales.model";

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor() { }

  getSalesMenu(): SalesMenu[] {
    let SalesMenu: SalesMenu[] = [
      { name: "Egg Sales", uri: "eggs" },
      { name: "Bird Sales", uri: "birds" },
    ];
    return SalesMenu
  }

}
