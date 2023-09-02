import { Injectable } from '@angular/core';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  cartList: {[key: number]: number} = {}
  no = 0
  totalPrice = 0
  idList: number[] = []
  cartVisibility = false
  cartHasOpened = false
  headerLoginVisible = false 
  headerLoginHasOpened = false 
  mobileMenuVisible = false

  constructor(private productService: ProductService) { 
    const p_list = localStorage.getItem('cart_list');
    if (!(p_list)) { 
      this.updateLocalStorage();
    } else {
      this.cartList = JSON.parse(p_list)
      this.updateData()
    }
  }

  addToCart(id: number, items: number) { 
    this.cartVisibility = true
    this.cartHasOpened = true
    this.updateCart(id, items)
  }

  updateCart(id: number, items: number) { 
    this.cartList[id] = items
    this.updateData()
    this.updateLocalStorage()
  }

  setLength() { 
    this.no = Object.keys(this.cartList).length
  }

  setIdList() { 
    this.idList = Object.keys(this.cartList).map(Number) 
  }

  setTotal() { 
    let t = 0
    for (let id of this.idList) { 
      t += this.cartList[id] * this.productService.get_product(id).price
    }
    this.totalPrice = t;
  }

  updateData() { 
    this.setLength()
    this.setIdList()
    this.setTotal()
  }

  private updateLocalStorage() { 
    localStorage.setItem('cart_list', JSON.stringify(this.cartList))
  }

  removeItem(id: number) { 
    delete this.cartList[id]
    this.updateData()
    this.updateLocalStorage()
  }
  
}
