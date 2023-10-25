import { Component, OnInit } from '@angular/core';
import { EcartService } from '../ecommerceService/ecart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  userId:any=""
  pdatas:any=""
  
  constructor(private es:EcartService){}

  ngOnInit(): void {
  this.wishlist()
  }

  wishlist(){
    if (localStorage.getItem("user")) {
      this.userId = localStorage.getItem("user")
      this.es.wishlistProducts(this.userId).subscribe({
        next: (data: any) => {
          this.pdatas = data.message
          // console.log(this.pdatas)
 
        }
      })
    }

  }

  addtoCart(pId:any,id:any){
    this.es.addToCart(this.userId,pId).subscribe({
      next:(data:any)=>{
        alert(data.message)
        this.es.cartUpdate()
        this.remove(id)
      }
    })
  }

  remove(pid:any){
    this.es.removeWishlist(pid).subscribe({
      next:(data:any)=>{
        alert(data.message)
        this.wishlist()
      }
    })
  }

}
