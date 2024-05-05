import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Repository } from './repos.model';
import { GitHubApiResponse } from './github-api-response.model';

@Injectable({
  providedIn: 'root'
})
export class ReposService {
  apiUrl = 'https://api.github.com/search/repositories';

  constructor(private http: HttpClient) { }

  getRepositories(): Observable<Repository[]> {
    console.log('getRepositories');
    return this.http.get<GitHubApiResponse>(this.apiUrl).pipe(
      map(response => response.items.map(item => ({
        name: item.name,
        owner: {
          avatar_url: item.owner.avatar_url
        },
        created_at: item.created_at
      } as Repository)))
    );
  }

  searchRepositories(name: string, language: string, minStars: number): Observable<Repository[]> {
    let query = `?q=${name}`;
    if (language) query += `+language:${language}`;
    if (minStars) query += `+stars:>${minStars}`;
    
    return this.http.get<GitHubApiResponse>(this.apiUrl + query).pipe(
      map(response => response.items.map(item => ({
        name: item.name,
        owner: {
          avatar_url: item.owner.avatar_url
        },
        created_at: item.created_at
      } as Repository)))
    );
  }
}
