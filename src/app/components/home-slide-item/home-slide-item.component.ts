import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-slide-item',
  templateUrl: './home-slide-item.component.html',
  styleUrls: ['./home-slide-item.component.css']
})
export class HomeSlideItemComponent {
  @Input() data: any;
  imgs = ["../../../assets/slides/1.jpg","../../../assets/slides/1.jpg"]
 

  
}
