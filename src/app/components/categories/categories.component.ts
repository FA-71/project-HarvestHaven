import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{

  categories_data: Category[] = [];

  constructor(public categoriesServie: CategoriesService) {}

  ngOnInit(): void {
   this.get_data();
  } 

  get_data(): void { 
    this.categories_data = this.categoriesServie.get_Categories();
    console.log(this.categories_data)
  }
}
