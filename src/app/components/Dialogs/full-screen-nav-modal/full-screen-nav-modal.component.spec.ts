import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScreenNavModalComponent } from './full-screen-nav-modal.component';

describe('FullScreenNavModalComponent', () => {
  let component: FullScreenNavModalComponent;
  let fixture: ComponentFixture<FullScreenNavModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullScreenNavModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullScreenNavModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
