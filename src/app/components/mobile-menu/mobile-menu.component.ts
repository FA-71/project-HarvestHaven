import { Component } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css']
})
export class MoblieMenuComponent {

  constructor(public storageService: StorageService) {}

  onClickOverlay(event: any) { 
    const overlay = document.querySelector('.mobile-menu-overlay')

    if (event.target == overlay) { 
      this.closeMenu()
    }
  }

  closeMenu() { 
    this.storageService.mobileMenuVisible = false
  }
}
