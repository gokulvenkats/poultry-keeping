import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'poultry-shed',
  templateUrl: './shed.component.html',
  styles: [
  ]
})
export class ShedComponent implements OnInit {

  shedForm!: FormGroup;
  shedFormData: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.shedForm = new FormGroup({
      shed: this.formBuilder.control('', [Validators.required]),
      capacity: this.formBuilder.control('', [Validators.required]),
      cages: this.formBuilder.control('', [Validators.required])
    })
  }

  save(): void {
    if (this.shedForm.valid) {
      this.shedFormData = {
        shed: this.shedForm.value.shed,
        capacity: this.shedForm.value.capacity,
        cages: this.shedForm.value.cages
      }
      console.log(this.shedFormData)
    }
  }

}
