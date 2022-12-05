import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { VendorModule } from 'src/app/vendor-module';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
/*
  public messagetemp = new Subject<String>();
  tempmsg$=this.messagetemp.asObservable();

  sendmessage(message : string){
    this.messagetemp.next(message);
  }*/
 // vendordetails!:VendorModule;
  vendordetails =new Subject<VendorModule>();
  //venobs$=this.vendordetails.asObservable();
  setbothcomponent(vend : VendorModule){
    this.vendordetails.next(vend);
  }

}
