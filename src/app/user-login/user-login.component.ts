import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EcartService } from '../ecommerceService/ecart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  userLoginForm=this.fb.group({
    email:[''],
    psw:['']
  })

  constructor(private fb:FormBuilder,private es:EcartService,private rout:Router){
  }

  ngOnInit(): void {
      
  }

  userLogin(){
    this.es.userLogin(this.userLoginForm.value.email,this.userLoginForm.value.psw).subscribe({
      next:(result:any)=>{
        alert(result.message)
        localStorage.setItem("user",result._id)
        this.rout.navigateByUrl("")
        this.es.header()
      },
      error:(result:any)=>{
        alert(result.error.message)
        this.rout.navigateByUrl("user-register")
      }
    })
  }

}
