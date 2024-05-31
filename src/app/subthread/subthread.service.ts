import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SubthreadModel } from './subthread-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubthreadService {
  constructor(private http: HttpClient) { }

  getAllSubthreads(): Observable<Array<SubthreadModel>> {
    return this.http.get<Array<SubthreadModel>>('http://localhost:8080/api/subthread');
  }

  createSubthread(SubthreadModel: SubthreadModel): Observable<SubthreadModel> {
    let token = localStorage.getItem('ngx-webstorage|authenticationtoken')
    token ="Bearer " + token?.substring(1,token.length - 1)
    return this.http.post<SubthreadModel>('http://localhost:8080/api/subthread',
    SubthreadModel,{headers: new HttpHeaders({ 'Authorization' : token}) });
  }
}