import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-div',
  templateUrl: './quantity-div.component.html',
  styleUrls: ['./quantity-div.component.css']
})
export class QuantityDivComponent {
  @Input() quantity: number = 1;  
  @Input() size: string = '';
  @Output() quantityClicked = new EventEmitter<number>(); 

  arr: number[] = [1, 3, 5, 10, 15]
  mobile: boolean = false
 
  ngOnInit() { 
    const screenWidth = window.innerWidth;
    if (screenWidth <= 500)
    { 
     this.mobile = true 
    }
  }

  btnClick(n: number) { 
    this.quantity = n;
    this.quantityClicked.emit(n);
  }
}
