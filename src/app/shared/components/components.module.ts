import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxMaskModule } from 'ngx-mask'

import { ComponentsRoutingModule } from './components-routing.module';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { LoginModalComponent } from './modals/login-modal/login-modal.component';
import { RegisterModalComponent } from './modals/register-modal/register-modal.component';
import { BodyComponent } from './body/body.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CriarServicoComponent } from './criar-servico/criar-servico.component';
import { PerfilServicoComponent } from './contratar/perfil-servico/perfil-servico.component';
import { PagamentoServicoComponent } from './contratar/pagamento-servico/pagamento-servico.component';

@NgModule({
  declarations: [
    LoginModalComponent, 
    RegisterModalComponent, 
    BodyComponent, CriarServicoComponent, PerfilServicoComponent, PagamentoServicoComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    NgxMaskModule.forChild(),
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
