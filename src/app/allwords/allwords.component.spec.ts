import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllwordsComponent } from './allwords.component';

describe('AllwordsComponent', () => {
  let component: AllwordsComponent;
  let fixture: ComponentFixture<AllwordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllwordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllwordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
