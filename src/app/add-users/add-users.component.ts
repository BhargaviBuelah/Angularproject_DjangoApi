import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit {
  angForm:FormGroup
  constructor(
    private fb:FormBuilder,
    private dataService:DataService, 
    private route:Router) {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      roll: ['', Validators.required],
      city: ['', Validators.required],
    })
  
   }

  ngOnInit(): void {
  }
  postdata(data:any){
    this.dataService.AddUser(this.angForm.value).subscribe(data=>{
      this.route.navigate(['list-users']);
    })
  }


}
