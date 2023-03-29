import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { SellerGuardGuard } from './auth/seller-guard.guard';
import { CartComponent } from './cart/cart.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerComponent } from './seller/seller.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'seller',component:SellerComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'cart',component:CartComponent
  },
  {
    path:'seller-home',component:SellerHomeComponent
  },
  {
    path:'add-product',component:AddProductComponent,canActivate:[SellerGuardGuard]
  },
  {
    path:'detail-product',component:DetailProductComponent,canActivate:[SellerGuardGuard]
  },
  {
    path:'search-product',component:SearchProductComponent,canActivate:[SellerGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
