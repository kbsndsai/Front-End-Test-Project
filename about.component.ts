import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {  
  items = [];
  email: String;
  username: String;
  y;
  flag;


  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {    
    this.items = this.dataService.test;     
    this.y = this.dataService.x;  
  }

  onDisplay(){
    //console.log(this.dataService.test.values);
    console.log(this.items);
  }

  onClick(i){
    this.router.navigate(['/edit-info']);
    console.log(i);
    this.dataService.x = i;
    this.flag = this.dataService.flag;
  }

}
