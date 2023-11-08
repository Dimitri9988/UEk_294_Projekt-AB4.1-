import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoteComponent } from './promote.component';

describe('PromoteComponent', () => {
  let component: PromoteComponent;
  let fixture: ComponentFixture<PromoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromoteComponent]
    });
    fixture = TestBed.createComponent(PromoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
