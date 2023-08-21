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
    CategoriesPageItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
