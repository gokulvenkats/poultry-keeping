import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'poultry-vaccine',
  templateUrl: './vaccine.component.html',
  styles: [
  ]
})
export class VaccineComponent implements OnInit {

  vaccineForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.vaccineForm = new FormGroup({
      batchName: this.formBuilder.control('', [Validators.required]),
      daysSinceHatch: this.formBuilder.control('', [Validators.required]),
      dayWeek: this.formBuilder.control('', [Validators.required]),
      vaccineName: this.formBuilder.control('', [Validators.required]),
      companyName: this.formBuilder.control('', [Validators.required]),
    })
  }

  save(): void {
    if (this.vaccineForm.valid) {
      console.log(this.vaccineForm.value)
    }
  }

}
