import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less']
})
export class CreateComponent {
  firstFormGroup = this._formBuilder.group({
    orgType: ['', Validators.required],
    orgName: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    investmentAmount: ['', Validators.required],
    rateOfInterest: ['', Validators.required],
    startDate: ['', Validators.required],
    year: ['', Validators.required],
    months: ['', Validators.required],
    days: ['', Validators.required],
    fdType: ['', Validators.required],
    payOutStructure: ['', Validators.required],
    interestCompoundingFrequency: ['', Validators.required],
  });
  
  isEditable:boolean=true;
  step:number = 1;
  
  constructor(private _formBuilder: FormBuilder, private router:Router) {}

  onFirstFormNextClick() {
    console.log(this.firstFormGroup.value);
    this.step=2;
    
  }

  onSubmit() {

  }

  backButtonClick(event:any) {
    console.log('Clicked');
    if(this.step === 1) {
      this.router.navigate(['..'])
    } else {
      this.step--;
    }
    
  }
}
