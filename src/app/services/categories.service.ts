import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categories_data: Category[] = [
    {name: "Vegetables", img_1: "veg-1.jpg", img_2: "veg-2.jpg"},
    {name: "Fruits", img_1: "fruits-1.jpg", img_2: "fruits-2.jpg"},
    {name: "Beans", img_1: "beans-1.jpg", img_2: "beans-2.jpg"},
    {name: "Spices", img_1: "spices-1.jpg", img_2: "spices-2.jpg"}
  ]

  constructor() { }

  get_Categories(): Category[] { 
    return this.categories_data;
  }
}
