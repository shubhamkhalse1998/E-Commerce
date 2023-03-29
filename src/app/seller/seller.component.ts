import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SignUp } from '../data-type';
import { SellerService } from '../service/seller.service';


@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent {
showLogin= false;

constructor(private seller:SellerService){}


postuser(){
  this.seller.signUp(this.signup.value)
}

openLogin(){
  this.showLogin=true;
}

openSignup(){
  this.showLogin=false;
}

login=new FormGroup({
  
  'email':new FormControl(),
  'password':new FormControl()
})

signup:FormGroup=new FormGroup({
  'name':new FormControl(),
  'email':new FormControl(),
  'password':new FormControl()
})
   
  
}
