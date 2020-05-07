import { Component, OnInit } from '@angular/core';
import {AddressModel} from '../models/address-model';
import {AddressService} from '../services/address.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-view-address',
  templateUrl: './view-address.component.html',
  styleUrls: ['./view-address.component.css']
})
export class ViewAddressComponent implements OnInit {

  addressList:AddressModel[];
  submitted: boolean;
  dataFound: boolean;
  dataNotFound:boolean;
  
  constructor(private router :Router, private service:AddressService) { }

  ngOnInit(): void {

    this.loadAddressList();
  }
  loadAddressList(){
    this.service.getAddressList().subscribe(
      (data) => { this.addressList = data;}
    );
  }
  deleteAddress(addid: number){
    this.submitted = true;
    this.service.deleteAddress(addid).subscribe(
      (data) => {
        this.dataFound = true;
        this.loadAddressList();
      },
      (err) => {
        this.dataNotFound = true;
        this.dataFound = false;
        setTimeout(() => this.dataNotFound = false, 3000);
      }
    )
  }
    setId = (addid: number) => {
    this.service.addid=addid;
    this.router.navigate(['address/edit-address'])

  }
  }