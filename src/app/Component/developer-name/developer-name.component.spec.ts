import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperNameComponent } from './developer-name.component';

describe('DeveloperNameComponent', () => {
  let component: DeveloperNameComponent;
  let fixture: ComponentFixture<DeveloperNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
