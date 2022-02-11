import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'poultry-daily',
  templateUrl: './daily.component.html',
  styles: [
  ]
})
export class DailyComponent implements OnInit {

  dailyForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dailyForm = new FormGroup({
      shedName: this.formBuilder.control('', [Validators.required]),
      entryDate: this.formBuilder.control('', [Validators.required]),
      eggInTrays: this.formBuilder.control('', [Validators.required]),
      todayMortality: this.formBuilder.control('', [Validators.required]),
      availableBirds: this.formBuilder.control('', [Validators.required]),
      ageInWeeks: this.formBuilder.control('', [Validators.required]),
      percentage: this.formBuilder.control('', [Validators.required]),
      bookPercentage: this.formBuilder.control('', [Validators.required]),
    })
  }

  save(): void {
    if (this.dailyForm.valid) {
      console.log(this.dailyForm.value)
    }
  }

}
