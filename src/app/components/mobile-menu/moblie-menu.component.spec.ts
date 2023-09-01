import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoblieMenuComponent } from './mobile-menu.component';

describe('MoblieMenuComponent', () => {
  let component: MoblieMenuComponent;
  let fixture: ComponentFixture<MoblieMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoblieMenuComponent]
    });
    fixture = TestBed.createComponent(MoblieMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
