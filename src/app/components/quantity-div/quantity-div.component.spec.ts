import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityDivComponent } from './quantity-div.component';

describe('QuantityDivComponent', () => {
  let component: QuantityDivComponent;
  let fixture: ComponentFixture<QuantityDivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuantityDivComponent]
    });
    fixture = TestBed.createComponent(QuantityDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
