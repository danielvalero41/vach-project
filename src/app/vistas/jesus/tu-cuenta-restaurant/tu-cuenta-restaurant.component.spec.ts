import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuCuentaRestaurantComponent } from './tu-cuenta-restaurant.component';

describe('TuCuentaRestaurantComponent', () => {
  let component: TuCuentaRestaurantComponent;
  let fixture: ComponentFixture<TuCuentaRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuCuentaRestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuCuentaRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
