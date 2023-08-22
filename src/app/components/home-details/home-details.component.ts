import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.css']
})
export class HomeDetailsComponent {
  categories: Category[] = []

  constructor (private categoriesServie: CategoriesService) {}


  ngOnInit () {
    this.categories = this.categoriesServie.get_Categories()
  }

}
