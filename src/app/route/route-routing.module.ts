import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../components/pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  { path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class RouteRoutingModule { }
