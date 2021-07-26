import { PagamentoServicoComponent } from './contratar/pagamento-servico/pagamento-servico.component';
import { PerfilServicoComponent } from './contratar/perfil-servico/perfil-servico.component';
import { CriarServicoComponent } from './criar-servico/criar-servico.component';
import { BodyComponent } from './body/body.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'criarServico', component: CriarServicoComponent },
  { path: 'contratarServico', component: PerfilServicoComponent },
  // { path: 'contratarServico/pagarServico', component: PagamentoServicoComponent },
  { path: '', component: BodyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
