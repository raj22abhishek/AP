import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultivitaminsComponent } from './multivitamins.component';

describe('MultivitaminsComponent', () => {
  let component: MultivitaminsComponent;
  let fixture: ComponentFixture<MultivitaminsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultivitaminsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultivitaminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
