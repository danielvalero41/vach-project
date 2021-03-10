import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroRestaurantComponent } from './registro-restaurant.component';

describe('RegistroRestaurantComponent', () => {
  let component: RegistroRestaurantComponent;
  let fixture: ComponentFixture<RegistroRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroRestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
