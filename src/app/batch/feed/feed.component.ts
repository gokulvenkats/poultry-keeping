import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'poultry-feed',
  templateUrl: './feed.component.html',
  styles: [
  ]
})
export class FeedComponent implements OnInit {

  feedForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.feedForm = new FormGroup({
      batchName: this.formBuilder.control('', [Validators.required]),
      purchaseDate: this.formBuilder.control('', [Validators.required]),
      deliveryType: this.formBuilder.control('', [Validators.required]),
      feedGrade: this.formBuilder.control('', [Validators.required]),
      tonsMetric: this.formBuilder.control('', [Validators.required]),
      totalBags: this.formBuilder.control('', [Validators.required]),
      costPerkg: this.formBuilder.control('', [Validators.required]),
      vendorName: this.formBuilder.control('', [Validators.required]),
    })
  }

  save(): void {
    if (this.feedForm.valid) {
      console.log(this.feedForm.value)
    }
  }

}
