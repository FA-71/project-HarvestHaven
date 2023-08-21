import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { SlideDataService } from 'src/app/services/slide-data.service';
import { Slide } from 'src/app/models/slide';

@Component({
  selector: 'app-home-slide',
  templateUrl: './home-slide.component.html',
  styleUrls: ['./home-slide.component.css']
})
export class HomeSlideComponent {
  
  @ViewChild('homeSlides') slides!: ElementRef;

  slideIndex = 0
  slides_data: Slide[] = [];

  constructor(public slideServie: SlideDataService) {}

  ngOnInit() { 
    this.slides_data = this.slideServie.get_data();
    console.log(this.slides_data)
  }

  ngAfterViewInit(): void {
    this.get_slide_list();
  }

  // change slides every 8000ms
  slide_rotation(slides: any) { 
    slides[this.slideIndex].classList.remove('in-animation')
    slides[this.slideIndex].classList.add('out-animation')  

    if ( 0 <= this.slideIndex && this.slideIndex < slides.length - 1) { 
      ++this.slideIndex;
    } else { 
      this.slideIndex = 0;
    }
    slides[this.slideIndex].classList.add('in-animation')
  }

  start_slide_animation(slides: any) { 
    slides[0].style.transform = 'translateX(0)';
    setInterval(() => this.slide_rotation(slides), 8000)
  }

  get_slide_list() {
    const slideElements = this.slides.nativeElement.querySelectorAll('.home-slide-item');
    console.log(slideElements)
    this.start_slide_animation(slideElements)
  }

}
