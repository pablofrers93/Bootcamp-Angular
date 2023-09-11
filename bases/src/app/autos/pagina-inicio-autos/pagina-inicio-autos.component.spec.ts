import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaInicioAutosComponent } from './pagina-inicio-autos.component';

describe('PaginaInicioAutosComponent', () => {
  let component: PaginaInicioAutosComponent;
  let fixture: ComponentFixture<PaginaInicioAutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaInicioAutosComponent]
    });
    fixture = TestBed.createComponent(PaginaInicioAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
