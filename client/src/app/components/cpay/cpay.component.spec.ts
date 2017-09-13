import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpayComponent } from './cpay.component';

describe('CpayComponent', () => {
  let component: CpayComponent;
  let fixture: ComponentFixture<CpayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
