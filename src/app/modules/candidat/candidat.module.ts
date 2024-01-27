import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatRoutingModule } from './candidat-routing.module';
import { DashboardComponent } from './candidat-components/dashboard/dashboard.component';
import {NzButtonModule} from "ng-zorro-antd/button";
import {DemoNgZorroAntdModule} from "../../DemoNgZorroAntdModule";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzWaveModule} from "ng-zorro-antd/core/wave";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { PostulerComponent } from './candidat-components/postuler/postuler.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PostulerComponent
  ],
    imports: [
        CommonModule,
        CandidatRoutingModule,
        NzButtonModule,
        NzGridModule,
        NzWaveModule,
      DemoNgZorroAntdModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
    ]
})
export class CandidatModule { }
