import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit{

  constructor(private rout:Router){}

  ngOnInit(): void {
  }

  userMng(){
    this.rout.navigateByUrl("admin-usermng")
  }

  productMng(){
    this.rout.navigateByUrl("admin-productmng")
  }

}
