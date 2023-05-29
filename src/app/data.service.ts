import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  API_URL ="http://127.0.0.1:8000/stuinfo/";

  constructor(private http:HttpClient) { }

  listusers(){
    return this.http.get<Users>(this.API_URL);
  }

  delUser(id:any){
    return this.http.delete<Users>(this.API_URL+id+'/');

  }

  AddUser(data:any){
    return this.http.post<Users>(this.API_URL,data);

  }
  getSingleuser(id:any){
    return this.http.get<Users>(this.API_URL+id+'/');

  }
  editUser(id:number,data:any){
    return this.http.put<Users>(this.API_URL+id+'/',data);
  }
}
