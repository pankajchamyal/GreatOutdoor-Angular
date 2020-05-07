import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddWishlistComponent } from './add-wishlist/add-wishlist.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { ViewWishlistComponent } from './view-wishlist/view-wishlist.component';
import { HomeComponent } from './home/home.component';
import { ViewAddressComponent } from './view-address/view-address.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { EditAddressComponent } from './edit-address/edit-address.component';
import {AddressService} from './services/address.service';


import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AddWishlistComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    ViewWishlistComponent,
    HomeComponent,
    ViewAddressComponent,
    AddAddressComponent,
    EditAddressComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
