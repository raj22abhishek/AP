import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IroncalciumComponent } from './ironcalcium.component';

describe('IroncalciumComponent', () => {
  let component: IroncalciumComponent;
  let fixture: ComponentFixture<IroncalciumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IroncalciumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IroncalciumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
