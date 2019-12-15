import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplepieComponent } from './peoplepie.component';

describe('PeoplepieComponent', () => {
  let component: PeoplepieComponent;
  let fixture: ComponentFixture<PeoplepieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeoplepieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoplepieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
