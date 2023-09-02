import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() id!: number; 
  @Input() no!: number;
  product!: Product;

  constructor(private productService: ProductService, private storageService: StorageService) {}

  ngOnInit() { 
    this.product = this.productService.get_product(this.id)
  }

  onBinClick() { 
    this.storageService.removeItem(this.id)
  }

  handleQuantity(no: number) { 
    this.storageService.updateCart(this.id, no)
  }

}
