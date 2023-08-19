import { Injectable } from '@angular/core';
import { Slide } from '../models/slide'

@Injectable({
  providedIn: 'root'
})
export class SlideDataService {
  slides: Slide[] = [
    {title_a: 'Shop the Best ', title_special: 'Fruits & Vegetables ', title_b:'Online!', img: '1.png', des: 'Discover a wide selection of fresh, quality fruits and vegetables available for convenient online shopping on our platform', link: 'categories'},
    {title_a: 'Shop the Best ', title_special: 'Fruits ', title_b:'Online!', img: '2.jpg', des: 'Discover a wide selection of fresh, quality fruits and vegetables available for convenient online shopping on our platform', link: 'categories'}
  ]

  constructor() { }

  get_data(): Slide[] { 
    return this.slides
  }

}
