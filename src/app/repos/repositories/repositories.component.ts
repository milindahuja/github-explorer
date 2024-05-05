import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Repository } from '../repos.model';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrl: './repositories.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepositoriesComponent {
  @Input() repositories!: Repository[] | null;
  @Output() viewCommits = new EventEmitter<string>();
  @Output() search = new EventEmitter<{}>();

  searchForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    language: new FormControl(''),
    minStars: new FormControl('')
  });

  searchRepositories(): void {
    this.search.emit(this.searchForm.value);
  }
}
