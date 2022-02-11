import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'poultry-birds',
  templateUrl: './birds.component.html',
  styles: [
  ]
})
export class BirdsComponent implements OnInit {

  birdsForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.birdsForm = new FormGroup({
      batchName: this.formBuilder.control('', [Validators.required]),
      salesDate: this.formBuilder.control('', [Validators.required]),
      totalCulls: this.formBuilder.control('', [Validators.required]),
      watered: this.formBuilder.control('', [Validators.required]),
      totalWeight: this.formBuilder.control('', [Validators.required]),
      cullsRateperKg: this.formBuilder.control('', [Validators.required]),
      brokerName: this.formBuilder.control('', [Validators.required]),
      averageWeight: this.formBuilder.control('', [Validators.required]),
      netCost: this.formBuilder.control('', [Validators.required]),
    })
  }

  save(): void {
    if (this.birdsForm.valid) {
      console.log(this.birdsForm.value)
    }
  }

}
