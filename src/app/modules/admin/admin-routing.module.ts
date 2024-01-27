import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./admin-components/dashboard/dashboard.component";
import {AddCompanyComponent} from "./admin-components/add-company/add-company.component";
import {UpdateCompanyComponent} from "./admin-components/update-company/update-company.component";

const routes: Routes = [
  {path:"dashboard", component: DashboardComponent},
  {path:"company", component: AddCompanyComponent},
  {path:"company/:id", component: UpdateCompanyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
