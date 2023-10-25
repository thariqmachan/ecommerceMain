import { Component, OnInit } from '@angular/core';
import { EcartService } from '../ecommerceService/ecart.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  products:any=[]

  constructor(private es:EcartService){ }

  ngOnInit(): void {
    this.es.getAllProducts().subscribe({
      next:(result:any)=> {
          // console.log(result.message);
          this.products=result.message
          
      }
    })

  }

}
