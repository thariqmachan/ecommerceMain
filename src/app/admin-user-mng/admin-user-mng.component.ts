import { Component, OnInit } from '@angular/core';
import { EcartService } from '../ecommerceService/ecart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-user-mng',
  templateUrl: './admin-user-mng.component.html',
  styleUrls: ['./admin-user-mng.component.css']
})
export class AdminUserMngComponent implements OnInit {

  users: any = []

  constructor(private es: EcartService, private rout: Router) {

  }
  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.es.getAllUsers().subscribe({
      next: (result: any) => {
        this.users = result.message
      }
    })

  }

  deleteUser(id: any) {
    this.es.deleteUser(id).subscribe({
      next: (result: any) => {
        alert(result.message)
        this.rout.navigateByUrl("admin-usermng")
        this.getUsers()
      }

    })
  }
}
