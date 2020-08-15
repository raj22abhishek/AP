import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntimalarialComponent } from './antimalarial.component';

describe('AntimalarialComponent', () => {
  let component: AntimalarialComponent;
  let fixture: ComponentFixture<AntimalarialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntimalarialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntimalarialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
