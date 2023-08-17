import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectOverviewModalComponent } from './project-overview-modal.component';

describe('ProjectOverviewModalComponent', () => {
  let component: ProjectOverviewModalComponent;
  let fixture: ComponentFixture<ProjectOverviewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectOverviewModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectOverviewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
