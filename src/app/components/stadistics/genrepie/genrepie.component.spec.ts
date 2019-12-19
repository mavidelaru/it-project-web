import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenrepieComponent } from './genrepie.component';

describe('GenrepieComponent', () => {
  let component: GenrepieComponent;
  let fixture: ComponentFixture<GenrepieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenrepieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenrepieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
