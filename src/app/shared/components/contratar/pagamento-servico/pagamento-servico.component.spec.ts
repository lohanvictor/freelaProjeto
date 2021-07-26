import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoServicoComponent } from './pagamento-servico.component';

describe('PagamentoServicoComponent', () => {
  let component: PagamentoServicoComponent;
  let fixture: ComponentFixture<PagamentoServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagamentoServicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagamentoServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
