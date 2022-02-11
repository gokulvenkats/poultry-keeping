import { Injectable } from '@angular/core';
import { BatchMenu } from "./batch.model";

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  constructor() { }

  getBatchMenu(): BatchMenu[] {
    let batchMenu: BatchMenu[] = [
      { name: "Shed entry details", uri: "shed" },
      { name: "Batch entry details", uri: "entry" },
      { name: "Feed details", uri: "feed" },
      { name: "Daily Entry", uri: "daily" },
      { name: "Vaccination Entry", uri: "vaccine" },
    ];
    return batchMenu
  }

}
