import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Theme } from './types/theme';
import { Post } from './types/post';

const { apiUrl } = environment;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getThemes() { return this.http.get<Theme[]>(`${apiUrl}/themes`) }

  getTheme(id: string) {
    const { apiUrl } = environment;
    return this.http.get<Theme>(`${apiUrl}/themes/${id}`);
  }

  createTheme(themeName: string, postText: string) {
    const { apiUrl } = environment;
    const payload = { themeName, postText };

    return this.http.post<Theme>(`${apiUrl}/themes`, payload);
  }

  getPosts(limit?: number) {
    if (limit) { return this.http.get<Post[]>(`${apiUrl}/posts?limit=${limit}`) }

    return this.http.get<Post[]>(`${apiUrl}/posts`);
  }
}
