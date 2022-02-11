import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'poultry-entry',
  templateUrl: './entry.component.html',
  styles: [
  ]
})
export class EntryComponent implements OnInit {

  batchForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.batchForm = new FormGroup({
      shedName: this.formBuilder.control('', [Validators.required]),
      chickVariety: this.formBuilder.control('', [Validators.required]),
      birthDate: this.formBuilder.control('', [Validators.required]),
      deliveryDate: this.formBuilder.control('', [Validators.required]),
      vendorName: this.formBuilder.control('', [Validators.required]),
      paidForChicks: this.formBuilder.control('', [Validators.required]),
      costPerChick: this.formBuilder.control('', [Validators.required]),
      freeChickCount: this.formBuilder.control('', [Validators.required]),
      totalQuantity: this.formBuilder.control('', [Validators.required]),
      totalBatchCost: this.formBuilder.control('', [Validators.required]),
    })
  }

  save(): void {
    if (this.batchForm.valid) {
      console.log(this.batchForm.value)
    }
  }

}
