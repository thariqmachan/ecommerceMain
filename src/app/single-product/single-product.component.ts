import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EcartService } from '../ecommerceService/ecart.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  pid: any = ""
  pdata: any = {}
  uid: any = ""
  constructor(private ar: ActivatedRoute, private es: EcartService, private rout: Router) { }

  ngOnInit(): void {

    this.ar.params.subscribe((data: any) => {
      this.pid = data.id
      this.es.getProduct(this.pid).subscribe({
        next: (result: any) => {
          this.pdata = result.message
        }
      })
    })

  }

  addToCart() {
    if (localStorage.getItem("user")) {
      this.uid = localStorage.getItem("user")
      this.es.addToCart(this.uid, this.pid).subscribe({
        next: (result: any) => {
          alert(result.message)
          this.es.cartUpdate()
        }
      })


    }
    else {
      alert("Please login first")
      this.rout.navigateByUrl("user-login")
    }
  }



  addToWishlist() {
    if (localStorage.getItem("user")) {
      this.uid = localStorage.getItem("user")
      this.es.addToWishlist(this.uid, this.pid).subscribe({
        next: (result: any) => {
          alert(result.message)
          this.es.cartUpdate()
        },
        error: (result: any) => {
          alert(result.error.message)
        }
      })


    }
    else {
      alert("Please login first")
      this.rout.navigateByUrl("user-login")
    }

  }


}




































