import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroViewComponent } from './error-view.component';

describe('ErroViewComponent', () => {
  let component: ErroViewComponent;
  let fixture: ComponentFixture<ErroViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErroViewComponent]
    });
    fixture = TestBed.createComponent(ErroViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
