import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quantity-div',
  templateUrl: './quantity-div.component.html',
  styleUrls: ['./quantity-div.component.css']
})
export class QuantityDivComponent {
  @Input() quantity: number = 1;  
  @Output() quantityClicked = new EventEmitter<number>(); 

  arr: number[] = [1, 3, 5, 10, 15];

  btnClick(n: number) { 
    this.quantity = n;
    this.quantityClicked.emit(n);
  }
}
