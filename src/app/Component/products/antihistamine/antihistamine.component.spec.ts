import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntihistamineComponent } from './antihistamine.component';

describe('AntihistamineComponent', () => {
  let component: AntihistamineComponent;
  let fixture: ComponentFixture<AntihistamineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntihistamineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntihistamineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
