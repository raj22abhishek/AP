import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalgesicComponent } from './analgesic.component';

describe('AnalgesicComponent', () => {
  let component: AnalgesicComponent;
  let fixture: ComponentFixture<AnalgesicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalgesicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalgesicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
