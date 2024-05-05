import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Commit } from './commit.model';

@Injectable({
  providedIn: 'root'
})
export class CommitsService {
  apiUrl = 'https://api.github.com/search/commits';

  constructor(private http: HttpClient) { }

  getCommits(name: string): Observable<Commit[]> {
    let query = `?q=${name}`;
    return this.http.get<any>(this.apiUrl + query).pipe(
      map((response: any) => response.items.map((item: any) => ({
        author: item.author,
        commit: {
          message: item.commit.message
        },
        url: item.url
      } as Commit )))
    );
  }
}
