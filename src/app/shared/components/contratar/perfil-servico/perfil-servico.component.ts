import { HirerRequest } from './../../../models/service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-servico',
  templateUrl: './perfil-servico.component.html',
  styleUrls: ['./perfil-servico.component.scss']
})
export class PerfilServicoComponent implements OnInit {

  perfilForm: FormGroup;
  showPagamento = false;
  contratante: Partial<HirerRequest>;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  sendToPagamento(){
    if (this.perfilForm.valid){
      this.contratante = {
        ampDesc: this.perfilForm.value['ampDesc'],
        name: this.perfilForm.value['name'],
        details: this.perfilForm.value['details'],
        value: this.perfilForm.value['value'],
      }
      this.showPagamento = true;
    }
  }

  buildForm(){
    this.perfilForm = this.formBuilder.group({
      ampDesc: [null, [Validators.required]],
      name: [null, [Validators.required]],
      details: [null, [Validators.required]],
      value: [null, [Validators.required]],
    })
  }

}
