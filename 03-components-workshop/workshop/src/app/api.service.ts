import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Theme } from './types/theme';
import { Post } from './types/post';

const { apiUrl } = environment;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getThemes() { return this.http.get<Theme[]>(`${apiUrl}/themes`) }

  getPosts(limit?: number) { return this.http.get<Post[]>(`${apiUrl}/posts`) }
}
