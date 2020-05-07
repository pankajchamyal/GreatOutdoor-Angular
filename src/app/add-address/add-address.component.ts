import { Component, OnInit } from '@angular/core';
import {AddressModel} from '../models/address-model';
import {AddressService} from '../services/address.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css'],
})

export class AddAddressComponent implements OnInit {

  success:boolean;
  addressModel:AddressModel;
  addressForm:FormGroup;

  constructor(private router:Router, private location: Location, private service:AddressService) { 
  this.addressModel=new AddressModel();}
  ngOnInit() {
    
    this.addressForm= new FormGroup({
      addline: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      city: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      pincode: new FormControl('', [Validators.required, Validators.min(100000),Validators.max(999999)]),
      state: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.addressForm.controls[controlName].hasError(errorName);
  }
 
  public onCancel = () => {
    this.location.back();
  }
 
  public addAddress = (addressFormValue: { addline: string; city: string; pincode: number; state: string; }) => {
    if (this.addressForm.valid) {
      this.executeAddressCreation(addressFormValue);
    }
  }
 
  private executeAddressCreation = (addressFormValue: { addline: string; city: string; pincode: number; state: string; }) => {
    let address: AddressModel = {
      addid: null,
      addline: addressFormValue.addline,
      city: addressFormValue.city,
      pincode: addressFormValue.pincode,
      state: addressFormValue.state
    }   
    this.service.addAddress(address).subscribe(
      (data)=>{
      this.success=true;
      setTimeout(()=>this.success=false,3000);
      this.router.navigate(['/address'])
    })
}
}
