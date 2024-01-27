import { Component } from '@angular/core';
import {AdminService} from "../../../admin/admin-services/admin.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {CandidatService} from "../../candidat-services/candidat.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  companies: any =[];

  constructor(private Service: CandidatService,
              private message: NzMessageService) { }


  ngOnInit(){
    this.getAllCompanies();
  }

  getAllCompanies(){
    this.companies = [];
    this.Service.getAllCompanies().subscribe((res)=>{
      console.log(res);
      res.forEach(element => {
        element.processedImg = 'data:Image/jpeg;base64,' + element.returnedImg;
        this.companies.push(element);
      })
    })
  }

}
