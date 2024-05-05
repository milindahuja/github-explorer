import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Commit } from '../commit.model';

@Component({
  selector: 'app-commits-child',
  templateUrl: './commits-child.component.html',
  styleUrl: './commits-child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CommitsChildComponent {
  @Input() commits!: Commit[] | null;
  @Output() loadAllCommits= new EventEmitter<string>();
  repoName!: string;
  searchForm: FormGroup;

  constructor() {
    this.searchForm = new FormGroup({
      author: new FormControl(''),
      message: new FormControl('')
    });
  }

  ngOnInit(): void {}

  searchCommits(): void {
    const { author, message } = this.searchForm.value;
  
    if (!author && !message) {
      // If both author and message are empty, reload all commits
      this.loadAllCommits.emit();
    } else {
      // Filter commits based on search criteria
      // Assuming commits is an array of objects with author, url, and message properties
      this.commits = this.commits!.filter(commit => {
        return (!author || commit.author?.login.toLowerCase().includes(author.toLowerCase())) &&
               (!message || commit.commit.message.toLowerCase().includes(message.toLowerCase()));
      });
    }
  }  
}
