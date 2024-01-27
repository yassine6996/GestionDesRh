import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./candidat-components/dashboard/dashboard.component";
import {PostulerComponent} from "./candidat-components/postuler/postuler.component";


const routes: Routes = [
  {path:"dashboard", component: DashboardComponent},
  {path:"postuler/:id", component: PostulerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatRoutingModule { }
