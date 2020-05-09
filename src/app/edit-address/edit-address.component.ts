import { Component, OnInit } from '@angular/core';
import {AddressModel} from '../models/address-model';
import {AddressService} from '../services/address.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from "@angular/router";

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css']
})
export class EditAddressComponent implements OnInit {

  success:boolean;
  addid: number;
  addressModel:AddressModel;
  addressForm:FormGroup;
  valueModel:AddressModel;

  constructor(private router:Router, private location: Location, private service:AddressService) { 
    this.addressModel=new AddressModel();
    }

  ngOnInit(): void {
    this.addressForm= new FormGroup({
      addline: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      city: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      pincode: new FormControl('', [Validators.required, Validators.min(100000),Validators.max(999999)]),
      state: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    });
    this.addid=this.service.addid;
    this.valueFun(); 
  }

  public valueFun() {
    console.log("hello");
    this.service.getById(this.addid).subscribe(
    (data) => {
      this.valueModel=data;
      this.addressForm.get('addline').setValue(this.valueModel.addline);
      this.addressForm.get('city').setValue(this.valueModel.city);
      this.addressForm.get('pincode').setValue(this.valueModel.pincode);
      this.addressForm.get('state').setValue(this.valueModel.state  );
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
      addid:null,
      retailerId:this.service.retailerId,
      addline: addressFormValue.addline,
      city: addressFormValue.city,
      pincode: addressFormValue.pincode,
      state: addressFormValue.state
    } 
    this.service.updateAddress(this.addid,address).subscribe(
      (data)=>{
      this.success=true;
      setTimeout(()=>this.success=false,3000);
      this.router.navigate(['/address'])
    })
}

}