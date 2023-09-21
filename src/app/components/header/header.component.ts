import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('filter') filter!: ElementRef<HTMLInputElement>
  title = "HavestHaven"
  items: number = 0;
  cartVisible: boolean = false
  filteredList: Product[] = []

  constructor(public storageService: StorageService, private productService: ProductService) {}

  ngOnInit() { 

  }

  showCart() { 
    this.storageService.cartVisibility = true  
    this.storageService.cartHasOpened = true
  }

  showLogin() { 
    this.storageService.headerLoginVisible = !this.storageService.headerLoginVisible
    this.storageService.headerLoginHasOpened = true
  }

  openMoblieMenu() { 
    this.storageService.mobileMenuVisible = !this.storageService.mobileMenuVisible
  }

  onSearch(text: string) { 
    this.filteredList = []
    if (text == '') { 
      return 
    }
    this.filteredList = this.productService.products.filter(product => product?.name.toLowerCase().includes(text.toLowerCase()))

    console.log(this.filteredList)
  }

  clearSearchInput() { 
    this.filter.nativeElement.value = ''
    this.filteredList = []

    if (window.innerWidth <= 800)  {
      const search = document.querySelector('.header__search') as HTMLElement
      if (search) { 
        search.style.display = 'none'
      }
    }
  }

  openSearch() { 
    const search = document.querySelector('.header__search') as HTMLElement
    if (search) { 
      if (search.style.display == 'block') { 
        search.style.display = 'none'
      } else { 
        search.style.display = 'block';
      }
    }
  }
}
