import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categories_data: Category[] = [
    {name: "Vegetables", img_1: "veg-1.jpg", img_2: "veg-2.jpg", p_list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]},
    {name: "Fruits", img_1: "fruits-1.jpg", img_2: "fruits-2.jpg", p_list: [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 30, 31, 16, 40]},
    {name: "Beans", img_1: "beans-1.jpg", img_2: "beans-2.jpg", p_list: [32, 34, 35, 37]},
    {name: "Spices", img_1: "spices-1.jpg", img_2: "spices-2.jpg", p_list: [38, 39, 41]}
  ]

  constructor() { }

  get_Categories(): Category[] { 
    return this.categories_data;
  }

  get_category(name: string | null): Category { 
    const category = this.categories_data.find((category) => name === category.name)
    if (category) { 
      return category;
    }
    else { 
      return {name: '', img_1:'', img_2: '', p_list: []};
    }
  }

}
