import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  product!: Product;
  no: number = 1; 

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      
      const id: number = Number(params.get('id'));
      if (id) {
        this.product = this.productService.get_product(id); 
      }

      if (this.product) {
        console.log(this.product.name)
      }
    })
  }

  handleAddToCart() { 
    console.log(this.no, this.product.id)
  }

  handleQuantity(n: number) { 
    this.no = n; 
  }
}
