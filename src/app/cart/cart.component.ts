import { Component, OnInit } from '@angular/core';
import { EcartService } from '../ecommerceService/ecart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  userId: any = ""
  pdatas: any = []
  total = 0

  constructor(private es: EcartService) { }

  ngOnInit(): void {
    this.cartItems()
  }

  cartItems() {
    if (localStorage.getItem("user")) {
      this.userId = localStorage.getItem("user")
      this.es.cartProducts(this.userId).subscribe({
        next: (data: any) => {
          this.pdatas = data.message
          // console.log(this.pdatas)

          this.es.totalPrice(this.userId).subscribe({
            next:(data:any)=>{
              this.total=data.message
              console.log(this.total);
              
            }
          })
 
        }
      })
    }
  }

  increment(pId:any){
    this.es.increment(pId).subscribe({
      next:(out:any)=>{
        this.cartItems()
      }
    })
  }

  decrement(pId:any){
    this.es.decrement(pId).subscribe({
      next:(out:any)=>{
        this.cartItems()
      },
      error:(result:any)=>{
        this.remove(pId)
        this.cartItems()
      }
    })

  }

  remove(id:any){
    this.es.remove(id).subscribe({
      next:(data:any)=>{
        alert(data.message)
        this.cartItems()
        this.es.cartUpdate()
      }
    })
  }

}
