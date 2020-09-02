import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiemeticComponent } from './antiemetic.component';

describe('AntiemeticComponent', () => {
  let component: AntiemeticComponent;
  let fixture: ComponentFixture<AntiemeticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntiemeticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntiemeticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
