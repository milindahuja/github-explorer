import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommitsRoutingModule } from './commits-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommitsComponent } from './commits.component';
import { CommitsChildComponent } from './commits-child/commits-child.component';


@NgModule({
  declarations: [
    CommitsComponent,
    CommitsChildComponent
  ],
  imports: [
    CommonModule,
    CommitsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CommitsModule { }
