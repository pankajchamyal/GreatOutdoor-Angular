import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ViewWishlistComponent } from './view-wishlist/view-wishlist.component';
import { HomeComponent } from './home/home.component';
import { ViewAddressComponent } from './view-address/view-address.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { EditAddressComponent } from './edit-address/edit-address.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'product',component:ProductsComponent},
  {path:'wishlist',component:ViewWishlistComponent},
  {path:'address',component:ViewAddressComponent},
  {path:'address/add-address',component:AddAddressComponent},
  {path:'address/edit-address',component:EditAddressComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
