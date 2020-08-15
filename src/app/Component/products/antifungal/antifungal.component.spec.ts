import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntifungalComponent } from './antifungal.component';

describe('AntifungalComponent', () => {
  let component: AntifungalComponent;
  let fixture: ComponentFixture<AntifungalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntifungalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntifungalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
