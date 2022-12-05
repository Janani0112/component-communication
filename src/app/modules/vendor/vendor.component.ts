import { Component, OnInit } from '@angular/core';
import { VendorModule } from 'src/app/vendor-module';
import { VendorService } from 'src/app/vendor.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {

  constructor(private vendorservice : VendorService) { }
  vendorlist = this.vendorservice.vendorListService;
 
  list:VendorModule={} as VendorModule;
  messagename(event:VendorModule){
    this.list=event;
    console.log(event);
  }
  
  ngOnInit(): void {
  }
}
