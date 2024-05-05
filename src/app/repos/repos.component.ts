import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { ReposService } from './repos.service';
import { Repository } from './repos.model';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrl: './repos.component.scss'
})
export class ReposComponent implements OnInit {
  repositories$: Observable<Repository[]> = of([]);

  constructor(private reposService: ReposService, private router: Router) { }

  ngOnInit(): void {
  }

  viewCommits(repoName: string): void {
    // Handle navigation to commits component here
    this.router.navigate(['/commits', repoName]);
  }

  searchResults(event: any): void {
    const { name, language, minStars } = event;
    this.repositories$ = this.reposService.searchRepositories(name, language, minStars);

  }
}
