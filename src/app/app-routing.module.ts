import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'repos', loadChildren: () => import('./repos/repos.module').then(m => m.ReposModule) }, 
  { path: 'commits/:repoName', loadChildren: () => import('./commits/commits.module').then(m => m.CommitsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
