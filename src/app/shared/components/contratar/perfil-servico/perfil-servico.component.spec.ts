import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilServicoComponent } from './perfil-servico.component';

describe('PerfilServicoComponent', () => {
  let component: PerfilServicoComponent;
  let fixture: ComponentFixture<PerfilServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilServicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
