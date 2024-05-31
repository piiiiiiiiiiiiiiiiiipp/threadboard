import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VotePayload } from './vote-button/vote-payload';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private http: HttpClient) { }
  vote(votePayload: VotePayload): Observable<any> {
    let token = localStorage.getItem('ngx-webstorage|authenticationtoken')
    token ="Bearer " + token?.substring(1,token.length - 1)

    return this.http.post('http://localhost:8080/api/votes/', votePayload, {headers: new HttpHeaders({ 'Authorization' : token}) });
  }
}