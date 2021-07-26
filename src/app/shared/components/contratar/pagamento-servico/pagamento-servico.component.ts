import { ServicosService } from './../../../services/servicos.service';
import { HirerRequest } from './../../../models/service';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-pagamento-servico',
  templateUrl: './pagamento-servico.component.html',
  styleUrls: ['./pagamento-servico.component.scss']
})
export class PagamentoServicoComponent implements OnInit {

  @Input('dataForm') dados: Partial<HirerRequest>;

  constructor(
    private router: Router,
    private servicoService: ServicosService
  ) { }

  ngOnInit(): void {
  }

  pagamento(tipo){
    this.dados.typePade = tipo
    this.servicoService.createHirerRequest(this.dados).pipe(take(1))
      .subscribe(ans => {
        this.router.navigate(['services'])
        alert(`Ok, está sendo enviado agora para seu email o pagamento do tipo ${tipo}`)
      })
  }

}
