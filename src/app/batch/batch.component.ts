import { Component, OnInit } from '@angular/core';
import { BatchService } from "./batch.service";
import { BatchMenu } from "./batch.model";

@Component({
  selector: 'poultry-batch',
  templateUrl: './batch.component.html'
})
export class BatchComponent implements OnInit {

  batchMenu: BatchMenu[] = [];

  constructor(private batchService:BatchService) { }

  ngOnInit(): void {
    this.batchMenu = this.batchService.getBatchMenu();
  }

}
