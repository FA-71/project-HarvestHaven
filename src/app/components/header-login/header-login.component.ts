import { Component } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.css']
})
export class HeaderLoginComponent {

  constructor(public storageService: StorageService) {}

  closeLogin(event: any) { 
    const container = document.querySelector('.header-login-container');

    if (event.target == container)
    {
      this.storageService.headerLoginVisible = false
    }
  } 
}
