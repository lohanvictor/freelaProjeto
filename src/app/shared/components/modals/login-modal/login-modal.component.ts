import { LoginService } from './../../../services/login.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from './../../../services/crud.service';
import { NavbarComponent } from './../../../../core/navbar/navbar.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/shared/models/user';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<LoginModalComponent>,
    private loginService: CrudService,
    private formBuilder: FormBuilder,
    private logonService: LoginService
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  cancel(){
    this.dialogRef.close();
  }

  logar(){
    this.loginService.getLogin()
      .pipe(
        take(1)
      ).subscribe(ans =>{
        const login = this.loginExist(ans);
        console.log(login);
        if (login) {
          this.logonService.logado(login);
          this.dialogRef.close();
        }
      }, erro =>{
        this.dialogRef.close();
      })
  }

  buildForm(){
    this.loginForm = this.formBuilder.group({
      email: [null],
      passwd: [null],
      cpf: [null]
    })
  }

  private loginExist(data:User[]){
    let user: User;
    data.forEach(el => {
      if (
        el.cpf === this.loginForm.value['cpf'] &&
        el.passwd === this.loginForm.value['passwd'] &&
        el.email === this.loginForm.value['email']
        ) {
          user = el;
        }
    })
    return user
  }
}
