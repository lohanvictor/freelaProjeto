import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { User } from '../../models/user';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  
  login: User;
  interval;

  constructor(
    private logonService: LoginService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.interval = setInterval(()=>{
      this.interval =  this.logonService.currentMessage
        .pipe(take(1))
        .subscribe(ans => {
          const user = ans as User;
          console.log(this.login)
          if (user.name) {
            console.log('intervalo')
            this.login = ans as User;
          }
        })
    }, 1000)
  }

  sendTo(route){
    if (this.login?.name) {
      this.router.navigate(['servicos',route])
    } else {
      alert('Faça login primeiro')
    }
  }

}
