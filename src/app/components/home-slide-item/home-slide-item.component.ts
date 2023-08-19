import { Component, Input, OnInit } from '@angular/core';
import { Slide } from 'src/app/models/slide';

@Component({
  selector: 'app-home-slide-item',
  templateUrl: './home-slide-item.component.html',
  styleUrls: ['./home-slide-item.component.css']
})
export class HomeSlideItemComponent {
  @Input() data!: Slide;

  ngOnInit() { 
    console.log(this.data)
  }
}
