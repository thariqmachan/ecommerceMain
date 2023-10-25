import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EcartService } from '../ecommerceService/ecart.service';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.css']
})
export class AdminAddProductComponent implements OnInit {

  constructor(private fb: FormBuilder, private es: EcartService) { }

  addProductForm = this.fb.group({
    pname: [''],
    description: [''],
    price: [''],
    image: [''],
    rating: [''],
    count: ['']
  })

  ngOnInit(): void {
  }

  addProduct() {
    const path = this.addProductForm.value

    const bodyData = {
      pname: path.pname,
      description: path.description,
      price: path.price,
      image: path.image,
      rating: path.rating,
      count: path.count
    }

    this.es.addProduct(bodyData).subscribe({
      next: (result: any) => {
        alert(result.message)
        this.addProductForm.reset()
      },
      error: (result: any) => {
        alert(result.error.message)
      }

    })
  }
}
