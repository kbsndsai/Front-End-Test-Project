import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;  
  
  constructor(private dataService: DataService) { }

  ngOnInit() {     
    this.signupForm = new FormGroup({
      'userData' : new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),      
      'gender': new FormControl('male'),
      'hobbies' : new FormArray([])
    });
  }

  onSubmit(){    
   console.log(this.signupForm.value);    
    this.dataService.test.push(this.signupForm.value);
      }

  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);    
  }
}
