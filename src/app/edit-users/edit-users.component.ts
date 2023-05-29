import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss']
})
export class EditUsersComponent implements OnInit {
  angForm:FormGroup
  constructor(
    private fb:FormBuilder,
    private dataService:DataService, 
    private route:Router,
    private activatedRoute: ActivatedRoute) {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      roll: ['', Validators.required],
      city: ['', Validators.required],
    })
  
   }
   id:any;

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(paramId=>{
      this.id = paramId.get('id');
      console.log(this.id);

    this.dataService.getSingleuser(this.id).subscribe(data=>{
      this.angForm.patchValue(data);
      console.log(data)
    })

    })
  }
  postdata(){
    this.dataService.editUser(this.id,this.angForm.value).subscribe(data=>{
      this.route.navigate(['list-users']);
    })
  }
}
