import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../app/module/home/home.module').then((x) => x.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../app/module/login/login.module').then((x) => x.LoginModule)
  },
  {
    path: 'job-find',
    loadChildren: () => import('../app/module/job-find/job-find.module').then((x) => x.JobFindModule)
  },
  // {
  //   path: 'detail-job',
  //   loadChildren: () => import('../app/module/detail-job/detail-job.module').then((x) => x.DetailJobModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
