import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosPlatillosComponent } from './todos-platillos.component';

describe('TodosPlatillosComponent', () => {
  let component: TodosPlatillosComponent;
  let fixture: ComponentFixture<TodosPlatillosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosPlatillosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosPlatillosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
