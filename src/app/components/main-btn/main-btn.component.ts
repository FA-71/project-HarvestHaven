import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-btn',
  templateUrl: './main-btn.component.html',
  styleUrls: ['./main-btn.component.css']
})
export class MainBtnComponent {
  @Input() color: number = 2;
  @Input() text: string ='';
  @Output() btnClicked = new EventEmitter<void>();

  onBtnClick() {
    this.btnClicked.emit()
  }
}
