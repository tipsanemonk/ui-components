import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoIconComponent } from './demo-icon.component';

describe('DemoIconComponent', () => {
  let component: DemoIconComponent;
  let fixture: ComponentFixture<DemoIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
