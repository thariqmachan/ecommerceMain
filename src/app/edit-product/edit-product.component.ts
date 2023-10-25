import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EcartService } from '../ecommerceService/ecart.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  pid:any=""
  pdata:any=[]

  constructor(private ar:ActivatedRoute,private rout:Router,private es:EcartService ){ }

  ngOnInit(): void {
    this.ar.params.subscribe((data:any)=>{
      this.pid=data.id
    })

    this.es.getProduct(this.pid).subscribe({
      next:(result:any)=>{
        this.pdata=result.message
        console.log(this.pdata);
        
      }
    })

  }

  editProduct(){
    this.es.editProduct(this.pid,this.pdata).subscribe({
      next:(result:any)=>{
        alert(result.message)
        this.rout.navigateByUrl("admin-productmng")
      }
    })
  }
  

}

