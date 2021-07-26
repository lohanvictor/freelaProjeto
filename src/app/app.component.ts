import { RegisterModalComponent } from './shared/components/modals/register-modal/register-modal.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginModalComponent } from './shared/components/modals/login-modal/login-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'freelaProjeto';

  constructor(
    public dialogService: MatDialog
  ) { }

  ngOnInit(): void {
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
        console.log(result);
      },
      erro => {
        console.error(erro);
      }
    );
  }
}
