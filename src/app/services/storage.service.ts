import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  cartList: {[key: number]: number} = {}
  no = 0;
  idList: number[] = []
  cartVisibility = false;
  cartHasOpened = false
  headerLoginVisible = false 
  headerLoginHasOpened = false 
  mobileMenuVisible = false

  constructor() { 
    const p_list = localStorage.getItem('cart_list');
    if (!(p_list)) { 
      this.updateLocalStorage();
    } else {
      this.cartList = JSON.parse(p_list)
      this.updateData()
    }
  }

  addToCart(id: number, items: number) { 
    this.cartList[id] = items
    this.cartVisibility = true
    this.cartHasOpened = true
    this.updateData()
    this.updateLocalStorage()
  }

  setLength() { 
    this.no = Object.keys(this.cartList).length
  }

  setIdList() { 
    this.idList = Object.keys(this.cartList).map(Number) 
  }

  updateData() { 
    this.setLength()
    this.setIdList()
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
