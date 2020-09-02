import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiviralComponent } from './antiviral.component';

describe('AntiviralComponent', () => {
  let component: AntiviralComponent;
  let fixture: ComponentFixture<AntiviralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntiviralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntiviralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
