import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { ServicosService } from './../../services/servicos.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Service } from '../../models/service';

@Component({
  selector: 'app-criar-servico',
  templateUrl: './criar-servico.component.html',
  styleUrls: ['./criar-servico.component.scss']
})
export class CriarServicoComponent implements OnInit {

  criarServicoForm: FormGroup;
  public horario = [
    {
      value: 'm',
      name: 'Manhã'
    },
    {
      value: 't',
      name: 'Tarde'
    },
    {
      value: 'n',
      name: 'Noite'
    }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private servicoService:ServicosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildServiceForm();
    console.log(this.criarServicoForm.value);
  }

  private buildServiceForm(){
    this.criarServicoForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      typeService: [null, [Validators.required]],
      value: [null, [Validators.required]],
      shift: [null, [Validators.required]]
    });
  }

  submitForm(){
    const service: Service = {
      name: this.criarServicoForm.value['name'],
      typeService: this.criarServicoForm.value['typeService'],
      value: this.criarServicoForm.value['value'],
      shift: this.criarServicoForm.value['shift'],
    }
    this.servicoService.createService(service).pipe(take(1))
      .subscribe(ans => {
        this.router.navigate(['servicos'])
        alert("Serviço salvo no banco de dados :)")
      })
  }

}
