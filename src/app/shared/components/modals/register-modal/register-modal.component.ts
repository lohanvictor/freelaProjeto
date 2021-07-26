import { User } from './../../../models/user';
import { CrudService } from './../../../services/crud.service';
import { ServicosService } from './../../../services/servicos.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<RegisterModalComponent>,
    private formService: FormBuilder,
    private crudService: CrudService
  ) { }

  ngOnInit(): void {
    this.registerFormBuild();
  }

  cancel() {
    this.dialogRef.close();
  }

  registrar() {
    const user: User = {
      cpf: this.registerForm.value['cpf'],
      email: this.registerForm.value['email'],
      name: this.registerForm.value['name'],
      passwd: this.registerForm.value['passwd'],
    }
    this.crudService.create(user)
      .pipe(
        take(1)
      )
      .subscribe(ans => {
        alert('Registrado :)')
      });
    this.dialogRef.close();
  }

  private registerFormBuild() {
    this.registerForm = this.formService.group({
      name: [null],
      email: [null],
      passwd: [null],
      cpf: [null]
    })
  }

}
