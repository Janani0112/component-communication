import { Injectable } from '@angular/core';
import { VendorModule } from './vendor-module';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  vendorListService : VendorModule[]=[
    {name:'Janani',age:'22',city:'Madurai'},
    {name:'Thinakaran',age:'59',city:'Ramnad'},
    {name:'Tharini',age:'43',city:'Chennai'},
    {name:'Piraveen',age:'26',city:'Banglore'},
  ];
  constructor() { }
}
