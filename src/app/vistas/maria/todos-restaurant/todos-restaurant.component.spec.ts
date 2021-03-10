import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosRestaurantComponent } from './todos-restaurant.component';

describe('TodosRestaurantComponent', () => {
  let component: TodosRestaurantComponent;
  let fixture: ComponentFixture<TodosRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosRestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
