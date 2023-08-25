import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  category!: Category;
  categories!: Category[]; 
  products!: Product[];
  
  constructor(private router: Router, private route: ActivatedRoute, private categoriesService: CategoriesService, private productService: ProductService) {}

  ngOnInit() { 
    this.route.paramMap.subscribe(params => {
      const name = params.get('category')
      this.categories = this.categoriesService.get_Categories()
      this.category = this.categoriesService.get_category(name)
      this.products = this.productService.get_product_list(this.category.p_list)
      console.log(this.products)

    })
  }
  
}
