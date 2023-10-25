import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcartService {

  uid:any

  cartCount=new BehaviorSubject(0)
  login=new BehaviorSubject(false)

  baseUrl="http://localhost:5000"

  constructor(private http:HttpClient) { 
    this.cartUpdate()
    this.header()
  }

  header(){
    if(localStorage.getItem("user")){
      this.login.next(true)
    }
  }

  cartUpdate(){
    if(localStorage.getItem("user")){
      this.uid=localStorage.getItem("user")
      this.http.get(`${this.baseUrl}/cart-count/${this.uid}`).subscribe({
        next:(result:any)=>{
          this.cartCount.next(result.message)
        }
      })
    }
  }


  // api to admin login
  adminLogin(uname:any,psw:any){
    const body={
      uname,psw
    }
    return this.http.post(`${this.baseUrl}/admin/login`,body)
  }


  // api to add products
  addProduct(bodyData:any){
    return this.http.post(`${this.baseUrl}/admin/add-product`,bodyData)
  }

  // api to get all products
  getAllProducts(){
    return this.http.get(`${this.baseUrl}/product-access`)
  }

  // api to get single product data
  getProduct(id:any){
    return this.http.get(`${this.baseUrl}/one-product/${id}`)
  }

  editProduct(id:any,bodyData:any){
    return this.http.put(`${this.baseUrl}/product-update/${id}`,bodyData) 
  }

  // api to delete product
  deleteProduct(id:any){
    return this.http.delete(`${this.baseUrl}/product-delete/${id}`)
  }

  // api to user register
  userRegister(email:any,psw:any){
    const body={
      email,psw
    }
    return this.http.post(`${this.baseUrl}/user-register`,body)
  }

  userLogin(email:any,psw:any){
    const body={email,psw}
    return this.http.post(`${this.baseUrl}/user-login`,body)

  }

  // api to add to cart
  addToCart(userId:any,pId:any){
    const body={
      userId,pId
    }
    return this.http.post(`${this.baseUrl}/addtocart`,body)
  }

  // api to get cart products
  cartProducts(userId:any){
    return this.http.get(`${this.baseUrl}/cart-items/${userId}`)
  }

  increment(pId:any){
    return this.http.get(`${this.baseUrl}/quantity-update-inc/${pId}`)
  }

  decrement(pId:any){
    return this.http.get(`${this.baseUrl}/quantity-update-dec/${pId}`)
  }


  totalPrice(id:any){
    return this.http.get(`${this.baseUrl}/price-total/${id}`)
  }

  remove(id:any){
    return this.http.delete(`${this.baseUrl}/remove-cart/${id}`)
  }

  addToWishlist(userId:any,pId:any){
    const body={
      userId,pId
    }
    return this.http.post(`${this.baseUrl}/addtowishlist`,body)
  }

  wishlistProducts(userId:any){
    return this.http.get(`${this.baseUrl}/wishlist-items/${userId}`)
  }

  removeWishlist(id:any){
    return this.http.delete(`${this.baseUrl}/remove-wishlist/${id}`)
  }



  getAllUsers(){
    return this.http.get(`${this.baseUrl}/user-access`)
  }

  deleteUser(id:any){
    return this.http.delete(`${this.baseUrl}/user-delete/${id}`)
  }


}
