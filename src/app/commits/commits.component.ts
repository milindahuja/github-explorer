import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommitsService } from './commits.service';
import { Observable, of } from 'rxjs';
import { Commit } from './commit.model';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.scss']
})
export class CommitsComponent implements OnInit {
  repoName!: string;
  commits$: Observable<Commit[]> = of([]);

  constructor(private route: ActivatedRoute, private commitsService: CommitsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.repoName = params.get('repoName')!;
      this.loadCommits();
    });
  }

  loadCommits(): void {
    this.commits$ = this.commitsService.getCommits(this.repoName);
    }
}
