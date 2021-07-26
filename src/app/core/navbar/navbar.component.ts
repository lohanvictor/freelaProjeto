import { LoginService } from './../../shared/services/login.service';
import { User } from './../../shared/models/user';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginModalComponent } from 'src/app/shared/components/modals/login-modal/login-modal.component';
import { RegisterModalComponent } from 'src/app/shared/components/modals/register-modal/register-modal.component';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public login: User;

  constructor(
    public dialogService: MatDialog,
    private route: Router,
    private logonService: LoginService
  ) { }

  ngOnInit(): void {
    this.emptyLogin();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  openModal(modal: string) {
    let dialogRef: any;
    if (modal === 'login') {
      dialogRef = this.dialogService.open(LoginModalComponent, {
        width: '350px'
      });
    } else {
      dialogRef = this.dialogService.open(RegisterModalComponent, {
        width: '350px'
      });
    }
    dialogRef.afterClosed().subscribe(
      result => {
        this.logonService.currentMessage
          .pipe(take(1))
          .subscribe(ans => {
            if (ans) {
              const newUser = ans as User
              this.login = newUser;
            }
          })
      },
      erro => {
        console.error(erro);
      }
    );
  }

  sendToService() {
    this.route.navigate(['servicos']);
  }

  emptyLogin(){
    const user:User = {
      name: '',
      email: '',
      cpf: '',
      passwd: ''
    }

    this.login = user;
  }

}
