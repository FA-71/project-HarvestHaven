import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeSlideItemComponent } from './components/home-slide-item/home-slide-item.component';
import { HomeSlideComponent } from './components/home-slide/home-slide.component';
import { CategoriesPageItemComponent } from './components/categories-page-item/categories-page-item.component';
import { HomeDetailsComponent } from './components/home-details/home-details.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { QuantityDivComponent } from './components/quantity-div/quantity-div.component';
import { MainBtnComponent } from './components/main-btn/main-btn.component';
import { SideCartComponent } from './components/side-cart/side-cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { HeaderLoginComponent } from './components/header-login/header-login.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    HomeComponent,
    CategoriesComponent,
    FooterComponent,
    HomeSlideItemComponent,
    HomeSlideComponent,
    CategoriesPageItemComponent,
    HomeDetailsComponent,
    CategoryComponent,
    ProductCardComponent,
    ProductPageComponent,
    QuantityDivComponent,
    MainBtnComponent,
    SideCartComponent,
    CartItemComponent,
    HeaderLoginComponent,
    LoginPageComponent,
    SignUpPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
