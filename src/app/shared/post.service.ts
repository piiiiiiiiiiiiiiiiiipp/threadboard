import { Observable } from "rxjs/internal/Observable";
import { PostModel } from "./post-model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PostCreatePayload } from "../post/post-create/post-create.payload";
import { map } from "rxjs";

@Injectable({
  providedIn: 'root'
})


export class PostService {

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Array<PostModel>> {
    return this.http.get<Array<PostModel>>('http://localhost:8080/api/posts/');
  }
  
  createPost(postPayload: PostCreatePayload): Observable<any> {
    let token = localStorage.getItem('ngx-webstorage|authenticationtoken')
    token ="Bearer " + token?.substring(1,token.length - 1)
    return this.http.post('http://localhost:8080/api/posts/', postPayload, {headers: new HttpHeaders({ 'Authorization' : token}) });
  }

  getPost(id: number): Observable<PostModel> {
    return this.http.get<PostModel>('http://localhost:8080/api/posts/' + id);
  }

  getAllPostsByUser(name: string): Observable<PostModel[]> {
    let token = localStorage.getItem('ngx-webstorage|authenticationtoken')
    token ="Bearer " + token?.substring(1,token.length - 1)
    return this.http.get<PostModel[]>('http://localhost:8080/api/posts/by-username/' + name,{headers: new HttpHeaders({ 'Authorization' : token}) });
  }
  
}



