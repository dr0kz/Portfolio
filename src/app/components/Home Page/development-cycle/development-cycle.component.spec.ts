import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentCycleComponent } from './development-cycle.component';

describe('DevelopmentCycleComponent', () => {
  let component: DevelopmentCycleComponent;
  let fixture: ComponentFixture<DevelopmentCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopmentCycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
