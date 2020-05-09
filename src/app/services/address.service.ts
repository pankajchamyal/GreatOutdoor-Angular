import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {AddressModel} from '../models/address-model';
@Injectable({
  providedIn: 'root'
})
export class AddressService {

  addid:number;
  baseUrl:string;
  retailerId: number=1;
  constructor(private http:HttpClient ) { 
    this.baseUrl=`${environment.baseMwUrl}/address`;
  }

getAddressList():Observable<AddressModel[]>{
    return this.http.get<AddressModel[]>(`${this.baseUrl + '/all'}/${this.retailerId}`);  
}

getById(addid: number):Observable<AddressModel>{
  return this.http.get<AddressModel>(`${this.baseUrl}/${addid}`);  
}

addAddress(addressModel:AddressModel):Observable<AddressModel>{
  return this.http.post<AddressModel>(this.baseUrl + '/add',addressModel);
}
deleteAddress(addid:number):Observable<void>{
  return this.http.delete<void>(`${this.baseUrl + '/delete'}/${addid}`);
}
updateAddress(addid:number, address:AddressModel):Observable<AddressModel>{
  return this.http.put<AddressModel>(`${this.baseUrl + '/update'}/${addid}`,address);
}
}
