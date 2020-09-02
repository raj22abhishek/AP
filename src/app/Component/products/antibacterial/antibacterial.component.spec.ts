import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntibacterialComponent } from './antibacterial.component';

describe('AntibacterialComponent', () => {
  let component: AntibacterialComponent;
  let fixture: ComponentFixture<AntibacterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntibacterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntibacterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
