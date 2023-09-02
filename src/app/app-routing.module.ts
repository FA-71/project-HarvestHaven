import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page.component';
import { ShoppingCartPageComponent } from './components/shopping-cart-page/shopping-cart-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'contacts', component: ContactsComponent},
  { path: 'categories', component: CategoriesComponent},
  { path: 'categories/:category', component: CategoryComponent },
  { path: 'product/:id', component: ProductPageComponent },
  { path: 'login', component: LoginPageComponent}, 
  { path: 'sign_up', component: SignUpPageComponent},
  { path: 'shopping_cart', component: ShoppingCartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
