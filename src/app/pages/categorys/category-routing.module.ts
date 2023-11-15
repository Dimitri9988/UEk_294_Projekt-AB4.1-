import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {authGuard} from "../../guards/auth.guard";

const routes: Routes = [
  {
    path: 'create',
    loadComponent: () => import('./create/create.component').then(v => v.CreateComponent),
    canActivate: [authGuard]

  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./create/create.component').then(v => v.CreateComponent)
  },
  {
    path: 'list',
    loadComponent: () => import('./list/list.component').then(v => v.ListComponent)
  },
  {
    path: 'show',
    loadComponent: () => import('./show/show.component').then(v => v.ShowComponent)
  },
  {
    path: 'delete',
    loadComponent: () => import('./delete/delete.component').then(v => v.DeleteComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
