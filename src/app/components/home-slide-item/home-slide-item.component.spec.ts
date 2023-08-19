import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSlideItemComponent } from './home-slide-item.component';

describe('HomeSlideItemComponent', () => {
  let component: HomeSlideItemComponent;
  let fixture: ComponentFixture<HomeSlideItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSlideItemComponent]
    });
    fixture = TestBed.createComponent(HomeSlideItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
