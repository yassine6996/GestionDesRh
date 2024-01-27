import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './admin-components/dashboard/dashboard.component';
import { AddCompanyComponent } from './admin-components/add-company/add-company.component';
import {DemoNgZorroAntdModule} from "../../DemoNgZorroAntdModule";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { UpdateCompanyComponent } from './admin-components/update-company/update-company.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AddCompanyComponent,
    UpdateCompanyComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }
