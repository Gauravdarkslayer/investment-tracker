import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less']
})
export class CreateComponent {
  firstFormGroup = this._formBuilder.group({
    orgType: ['', Validators.required],
    orgName: ['', Validators.required],
    category: ['', Validators.required],
    newCategoryName: [''],
  });
  secondFormGroup = this._formBuilder.group({
    investmentAmount: ['', Validators.required],
    rateOfInterest: ['', Validators.required],
    startDate: ['', Validators.required],
    year: ['', Validators.required],
    months: ['', Validators.required],
    days: ['', Validators.required],
    fdType: ['', Validators.required],
    payOutStructure: [''],
    interestCompoundingFrequency: ['', Validators.required],
  });
  
  isEditable:boolean=true;
  step:number = 1;
  
  constructor(private _formBuilder: FormBuilder, private router:Router, private dataService: DataService) {
    console.log();
    
  }

  onFirstFormNextClick() {
    console.log(this.firstFormGroup.value);
    this.step=2;
    
  }

  onSubmit(): boolean | void {
    console.log(this.secondFormGroup.valid);
    
    if(!this.secondFormGroup.valid) return false;
    if(this.secondFormGroup.value.fdType != 'payOut') {
      this.secondFormGroup.value.payOutStructure = '';
    }

    const mergedFormData = {...this.secondFormGroup.value, ...this.firstFormGroup.value}
    alert(JSON.stringify(mergedFormData))
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
