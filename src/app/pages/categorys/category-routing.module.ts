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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
