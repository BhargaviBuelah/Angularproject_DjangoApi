import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  users:any;
  

  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    this.fetchUsers();
   
  }
  deleteUser(id:any){
    this.dataservice.delUser(id).subscribe(()=>{
      this.fetchUsers();

    })
  }
  fetchUsers(){
    this.dataservice.listusers().subscribe((data)=>{
      this.users = data;
      console.log(this.users);
    })
  }



}
