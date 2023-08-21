import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesPageItemComponent } from './categories-page-item.component';

describe('CategoriesPageItemComponent', () => {
  let component: CategoriesPageItemComponent;
  let fixture: ComponentFixture<CategoriesPageItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesPageItemComponent]
    });
    fixture = TestBed.createComponent(CategoriesPageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
