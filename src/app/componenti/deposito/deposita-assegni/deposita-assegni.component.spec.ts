import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositaAssegniComponent } from './deposita-assegni.component';

describe('DepositaAssegniComponent', () => {
  let component: DepositaAssegniComponent;
  let fixture: ComponentFixture<DepositaAssegniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepositaAssegniComponent]
    });
    fixture = TestBed.createComponent(DepositaAssegniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
