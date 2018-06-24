import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboadComponent } from './dashboad.component';

describe('DashboadComponent', () => {
  let component: DashboadComponent;
  let fixture: ComponentFixture<DashboadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
