import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminUserMngComponent } from './admin-user-mng/admin-user-mng.component';
import { AdminProductMngComponent } from './admin-product-mng/admin-product-mng.component';
import {HttpClientModule} from '@angular/common/http';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component'

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    AdminUserMngComponent,
    AdminProductMngComponent,
    AdminAddProductComponent,
    EditProductComponent,
    SingleProductComponent,
    UserLoginComponent,
    UserRegisterComponent,
    CartComponent,
    WishlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
