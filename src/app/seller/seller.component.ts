import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent {
showLogin= false;

openLogin(){
  this.showLogin=true;
}

openSignup(){
  this.showLogin=false;
}



}
