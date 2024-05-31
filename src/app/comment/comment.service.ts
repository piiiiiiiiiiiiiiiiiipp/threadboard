import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommentPayload } from './comment.payload';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) { }

  getAllCommentsForPost(postId: number): Observable<CommentPayload[]> {
    let token = localStorage.getItem('ngx-webstorage|authenticationtoken')
    token ="Bearer " + token?.substring(1,token.length - 1)
    return this.httpClient.get<CommentPayload[]>('http://localhost:8080/api/comments/by-post/' + postId,{headers: new HttpHeaders({ 'Authorization' : token}) });
  }

  postComment(commentPayload: CommentPayload): Observable<any> {
    let token = localStorage.getItem('ngx-webstorage|authenticationtoken')
    token ="Bearer " + token?.substring(1,token.length - 1)

    return this.httpClient.post<CommentPayload>('http://localhost:8080/api/comments/', commentPayload,{headers: new HttpHeaders({ 'Authorization' : token}) });
  }

  getAllCommentsByUser(name: string) {
    let token = localStorage.getItem('ngx-webstorage|authenticationtoken')
    token ="Bearer " + token?.substring(1,token.length - 1)

    return this.httpClient.get<CommentPayload[]>('http://localhost:8080/api/comments/by-username/' + name, {headers: new HttpHeaders({ 'Authorization' : token}) });
  }
}