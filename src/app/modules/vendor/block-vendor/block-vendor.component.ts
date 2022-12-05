import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { VendorModule } from 'src/app/vendor-module';

@Component({
  selector: 'app-block-vendor',
  templateUrl: './block-vendor.component.html',
  styleUrls: ['./block-vendor.component.scss']
})
export class BlockVendorComponent implements OnInit {

  constructor(private ss:SharedService) { }

  s!:VendorModule;

  ngOnInit(): void {
    this.ss.vendordetails.subscribe((data) => {
    //  data=this.s;
    this.s=data;
     // console.log(this.s);
    });
    /*
    this.ss.tempmsg$.subscribe(
      data=>{
        console.log("Received Message");
      });*/
  }
}
