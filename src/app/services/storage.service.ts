import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  cartList: {[key: number]: number} = {}

  constructor() { 
    const p_list = localStorage.getItem('cart_list');
    if (!(p_list)) { 
      this.updateLocalStorage();
    } else {
      this.cartList = JSON.parse(p_list)
      console.log(this.cartList)
    }
  }

  addToCart(id: number, items: number) { 
    this.cartList[id] = items
    this.updateLocalStorage()
  }

  private updateLocalStorage() { 
    localStorage.setItem('cart_list', JSON.stringify(this.cartList))
  }
}
