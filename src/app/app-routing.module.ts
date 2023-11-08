import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "auth/login",
    loadComponent: () =>
      import(`./pages/auth/login/login.component`).then(v => v.LoginComponent)
  },
  {
    path: "auth/register",
    loadComponent: () =>
      import(`./pages/auth/register/register.component`).then(v => v.RegisterComponent)
  },
  /**
  {
    path: "categorys/create",
    loadComponent: () =>
      import(`./pages/categorys/create/create.component`).then(v => v.CreateComponent)
  },
  {
    path: "categorys/delete",
    loadComponent: () =>
      import(`./pages/categorys/delete/delete.component`).then(v => v.DeleteComponent)
  },
  {
    path: "categorys/edit",
    loadComponent: () =>
      import(`./pages/categorys/edit/edit.component`).then(v => v.EditComponent)
  },
  {
    path: "categorys/list",
    loadComponent: () =>
      import(`./pages/categorys/list/list.component`).then(v => v.ListComponent)
  },
  {
    path: "categorys/show",
    loadComponent: () =>
      import(`./pages/categorys/show/show.component`).then(v => v.ShowComponent)
  },
*/
  {
    path: "category",
    loadChildren: () =>
      import('./pages/categorys/category.module').then(v => v.CategoryModule)
  },




  {
    path: "products/create",
    loadComponent: () =>
      import(`./pages/products/create/create.component`).then(v => v.CreateComponent)
  },
  {
    path: "products/delete",
    loadComponent: () =>
      import(`./pages/products/delete/delete.component`).then(v => v.DeleteComponent)
  },
  {
    path: "products/edit",
    loadComponent: () =>
      import(`./pages/products/edit/edit.component`).then(v => v.EditComponent)
  },
  {
    path: "products/list",
    loadComponent: () =>
      import(`./pages/products/list/list.component`).then(v => v.ListComponent)
  },
  {
    path: "products/show",
    loadComponent: () =>
      import(`./pages/products/show/show.component`).then(v => v.ShowComponent)
  },
  {
    path: "users/create",
    loadComponent: () =>
      import(`./pages/users/create/create.component`).then((v => v.CreateComponent))
  },
  {
    path: "users/list",
    loadComponent: () =>
      import(`./pages/users/list/list.component`).then((v => v.ListComponent))
  },
  {
    path: "users/promote",
    loadComponent: () =>
      import(`./pages/users/promote/promote.component`).then((v => v.PromoteComponent))
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
