import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseCompComponent } from './collapse-comp.component';

describe('CollapseCompComponent', () => {
  let component: CollapseCompComponent;
  let fixture: ComponentFixture<CollapseCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapseCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
