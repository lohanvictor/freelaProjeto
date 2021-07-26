import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private api = 'http://localhost:3000/';

  constructor(
    private http: HttpClient
  ) { }

  getLogin(): Observable<User[]> {
    const url = `${this.api}login` ;
    return this.http.get<User[]>(url)
      .pipe(
        map(this.jsonDatasToLogin)
      )
  }

  getLoginById(id:number): Observable<User[]> {
    const url = `${this.api}login/${id}` ;
    return this.http.get<User>(url)
      .pipe(
        map(this.jsonDatasToLogin)
      )
  }

  create(data: User): Observable<User>{
    const url = `${this.api}login` ;
    return this.http.post<User>(url, data)
      .pipe(
        map(this.jsonDataToLogin)
      )
  }

  private jsonDatasToLogin(datas: any): User[]{
    let loginData: User[] = [];
    datas.forEach(el => {
      loginData.push(el as User);
    });
    return loginData;
  }

  private jsonDataToLogin(data: any): User {
    return data as User;
  }
}
