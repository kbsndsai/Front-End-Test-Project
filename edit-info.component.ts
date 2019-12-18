import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent implements OnInit {
  items = []; 
  y = 0;
  username;
  hobbies = [];
  genders = ['male', 'female'];
  signupForm: FormGroup;
  flag;

  constructor(private dataService: DataService, private router: Router){}

  ngOnInit() {
    this.items = this.dataService.test;     
    this.y = this.dataService.x; 
    this.hobbies = this.items[this.y].hobbies;    
    console.log(this.items[this.y]);
    this.flag = this.dataService.flag; 
    // this.username = this.items[this.y].userData.username;
    this.signupForm = new FormGroup({
      'userData' : new FormGroup({
        'username': new FormControl(this.items[this.y].userData.username, Validators.required),
        'email': new FormControl(this.items[this.y].userData.email, [Validators.required, Validators.email])
      }),      
      'gender': new FormControl('male'),
      'hobbies' : new FormArray([])
    });
  }

  onConsole(){
    console.log(this.items);
    console.log(this.y);
  }

  onUpdateDetails(){    
    const control = new FormControl(this.items[this.y].hobbies, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control); 
    console.log(this.signupForm.value);
    this.dataService.test[this.y]=this.signupForm.value;
    this.router.navigate(['/about']);
  }

  addHobby(){
    const control = new FormControl(this.items[this.y].hobbies, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);   
    this.flag = false;
  }
  
}
