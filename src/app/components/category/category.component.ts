import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  category!: Category;
  
  constructor(private router: Router, private route: ActivatedRoute, private categoriesService: CategoriesService) {}

  ngOnInit() { 
    const name = this.route.snapshot.paramMap.get('category')
    this.category = this.categoriesService.get_category(name)
    console.log(this.category)
  }
  
}
