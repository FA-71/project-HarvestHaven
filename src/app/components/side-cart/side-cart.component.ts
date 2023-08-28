import { Component, Input, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-side-cart',
  templateUrl: './side-cart.component.html',
  styleUrls: ['./side-cart.component.css']
})
export class SideCartComponent implements OnInit{

  constructor(private productService: ProductService, public storageService: StorageService) {}

  ngOnInit() { 

  }

  onCartClick(event: any) { 
    const cart = document.querySelector('.cart')
    if (cart == event.target && cart) { 
      this.closeCart()
    }
  }

  closeCart() { 
    this.storageService.cartVisibility = false
  }

}
