import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'poultry-eggs',
  templateUrl: './eggs.component.html',
  styles: [
  ]
})
export class EggsComponent implements OnInit {

  eggsForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.eggsForm = new FormGroup({
      eggType: this.formBuilder.control('', [Validators.required]),
      salesDate: this.formBuilder.control('', [Validators.required]),
      trayCounts: this.formBuilder.control('', [Validators.required]),
      eggPrice: this.formBuilder.control('', [Validators.required]),
      totalEggs: this.formBuilder.control('', [Validators.required]),
      priceOnSales: this.formBuilder.control('', [Validators.required]),
      brokerName: this.formBuilder.control('', [Validators.required]),
      brokerCommission: this.formBuilder.control('', [Validators.required]),
      marketMinus: this.formBuilder.control('', [Validators.required]),
      totalMinus: this.formBuilder.control('', [Validators.required]),
      totalNetCost: this.formBuilder.control('', [Validators.required]),
    })
  }

  save(): void {
    if (this.eggsForm.valid) {
      console.log(this.eggsForm.value)
    }
  }

}
