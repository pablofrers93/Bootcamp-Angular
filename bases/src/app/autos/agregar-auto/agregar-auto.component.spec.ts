import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAutoComponent } from './agregar-auto.component';

describe('AgregarAutoComponent', () => {
  let component: AgregarAutoComponent;
  let fixture: ComponentFixture<AgregarAutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarAutoComponent]
    });
    fixture = TestBed.createComponent(AgregarAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
