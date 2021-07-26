import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError, take } from "rxjs/operators";
import { HirerRequest, Service } from '../models/service';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  private api = 'http://localhost:3000/';

  constructor(
    private http: HttpClient
  ) { }

  createService(service): Observable<Service>{
    const url = `${this.api}service` ;
    return this.http.post(url,service).pipe(
      map(this.jsonDataToService)
    )
  }

  createHirerRequest(req): Observable<HirerRequest>{
    const url = `${this.api}hirerRequest`;
    return this.http.post(url,req).pipe(
      map(this.jsonDataToHirerRequest)
    )
  }

  private jsonDataToService(data): Service {
    return data as Service;
  }

  private jsonDataToHirerRequest(data): HirerRequest{
    return data as HirerRequest;
  }
}
