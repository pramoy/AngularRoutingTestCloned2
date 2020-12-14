import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestcmpComponent } from './testcmp.component';

describe('TestcmpComponent', () => {
  let component: TestcmpComponent;
  let fixture: ComponentFixture<TestcmpComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestcmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
