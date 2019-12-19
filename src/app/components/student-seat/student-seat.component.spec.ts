import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSeatComponent } from './student-seat.component';

describe('StudentSeatComponent', () => {
  let component: StudentSeatComponent;
  let fixture: ComponentFixture<StudentSeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
