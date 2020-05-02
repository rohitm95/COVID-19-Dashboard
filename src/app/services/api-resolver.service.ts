import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiResolverService implements Resolve<any> {

  constructor(private http: HttpClient) { }

  resolve(){
    return this.http.get('https://api.covid19india.org/data.json');
  }
}
