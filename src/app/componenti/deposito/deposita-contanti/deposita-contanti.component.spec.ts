import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositaContantiComponent } from './deposita-contanti.component';

describe('DepositaContantiComponent', () => {
  let component: DepositaContantiComponent;
  let fixture: ComponentFixture<DepositaContantiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepositaContantiComponent]
    });
    fixture = TestBed.createComponent(DepositaContantiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
