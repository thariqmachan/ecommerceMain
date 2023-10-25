import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EcartService } from '../ecommerceService/ecart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit{

  userRegisterForm=this.fb.group({
    email:[''],
    psw:['']
  })

  constructor(private fb:FormBuilder,private es:EcartService,private rout:Router){ }

  ngOnInit(): void {
      
  }

  register(){
    this.es.userRegister(this.userRegisterForm.value.email,this.userRegisterForm.value.psw).subscribe({
      next:(result:any)=>{
        alert(result.message)
        this.rout.navigateByUrl("user-login")
      },
      error:(result:any)=>{
        alert(result.error.message)
        this.userRegisterForm.reset()
      }
    })
  }

}
