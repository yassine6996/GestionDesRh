import { Component } from '@angular/core';
import {AdminService} from "../../admin-services/admin.service";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  companies: any =[];

  constructor(private adminService: AdminService,
              private message: NzMessageService) { }

  ngOnInit(){
    this.getAllCompanies();
  }

  getAllCompanies(){
    this.companies = [];
    this.adminService.getAllCompanies().subscribe((res)=>{
      console.log(res);
      res.forEach(element => {
        element.processedImg = 'data:Image/jpeg;base64,' + element.returnedImg;
        this.companies.push(element);
      })
    })
  }

  deleteCompany(id:number){
    console.log(id);
    this.adminService.deletCompany(id).subscribe((res)=>{
      this.getAllCompanies();
      this.message.success("Offre deleted Successfully", {nzDuration: 5000});
    })
  }

}
