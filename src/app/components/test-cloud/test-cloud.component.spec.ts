import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestCloudComponent } from './test-cloud.component';

describe('TestCloudComponent', () => {
  let component: TestCloudComponent;
  let fixture: ComponentFixture<TestCloudComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCloudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
