import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReposRoutingModule } from './repos-routing.module';
import { ReposComponent } from './repos.component';
import { RepositoriesComponent } from './repositories/repositories.component';


@NgModule({
  declarations: [
    ReposComponent,
    RepositoriesComponent
  ],
  imports: [
    CommonModule,
    ReposRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ReposModule { }
