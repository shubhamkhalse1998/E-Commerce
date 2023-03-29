import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SignUp } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerLoggedIn= new BehaviorSubject<boolean>(false)

  constructor(private http:HttpClient, private router:Router) { }

  signUp(data:any){
   return this.http.post(`http://localhost:3000/seller`,data,{observe:'response'}).subscribe((res)=>{
    console.log(res)
    if(res){
      this.router.navigate(['seller-home'])
    }
      this.isSellerLoggedIn.next(true);
      localStorage.setItem('seller',JSON.stringify(res.body))
      this.router.navigate(['seller-home'])
    })
  }
}
