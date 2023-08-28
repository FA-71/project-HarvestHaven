import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = "HavestHaven"
  items: number = 0;
  cartVisible: boolean = false

  constructor(public storageService: StorageService) {}

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
}
