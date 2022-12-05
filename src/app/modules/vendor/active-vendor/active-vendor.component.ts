import { Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { VendorModule } from 'src/app/vendor-module';

@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {

  @Input() public vendorservicechild:VendorModule[]=[]; 
  @Output() public childEvent = new EventEmitter<VendorModule>();

  //@Output() public childEvent = new EventEmitter();
  constructor(private ss:SharedService) { }

  selectedVendor?:VendorModule;
  onSelectDisplay(vendor:VendorModule):void{
    this.ss.setbothcomponent(vendor);
    this.childEvent.emit(vendor);

  }
   /*
  fireevent(){
    this.childEvent.emit("Heyyy Janani..Welcome");
  }*/
  ngOnInit(): void {
  }
}
