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

    return this.http.post<SubthreadModel>('http://localhost:8080/api/subthread',
    SubthreadModel);
  }
  
  getSubthreadById(subthreadId: number): Observable<SubthreadModel>{
    return this.http.get<SubthreadModel>('http://localhost:8080/api/subthread/' + subthreadId);
  }

}