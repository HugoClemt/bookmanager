import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBookViewComponent } from './new-book-view.component';

describe('NewBookViewComponent', () => {
  let component: NewBookViewComponent;
  let fixture: ComponentFixture<NewBookViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewBookViewComponent]
    });
    fixture = TestBed.createComponent(NewBookViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
