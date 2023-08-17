import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeOfMyWorkComponent } from './some-of-my-work.component';

describe('SomeOfMyWorkComponent', () => {
  let component: SomeOfMyWorkComponent;
  let fixture: ComponentFixture<SomeOfMyWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomeOfMyWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeOfMyWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
