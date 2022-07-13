import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end-challenge';

  experts = [
    {
      name: 'Jessica D.',
      available: '11/6/22',
      industry: 'Professional Services'
    },
    {
      name: 'David F.',
      available: '	8/5/21',
      industry: 'Sports/Fitness'
    },
    {
      name: 'Keir Y.',
      available: '4/12/22',
      industry: '	E-Sports'
    }
  ]

  industries: string[] = []

  // Form Fields
  nameFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  industryControl = new FormControl('', [Validators.required]);

  constructor() {
    this.experts.forEach((expert) => this.industries.push(expert.industry));
  }

  submit() {
    // Validate form entries
    if (!this.nameFormControl.valid || !this.emailFormControl.valid || !this.industryControl.valid) {
      console.error("Inputs are not valid");
      return;
    }

    // Send
    console.log('Form Results:\nName: %s\nEmail: %s\nIndustry: %s',
      this.nameFormControl.value,
      this.emailFormControl.value,
      this.industryControl.value);
  }
}
