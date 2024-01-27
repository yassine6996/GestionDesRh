import { Component } from '@angular/core';
import {AdminService} from "../../admin-services/admin.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NzMessageService} from "ng-zorro-antd/message";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent {

  isSpinning:boolean;
  companyForm: FormGroup;
  selectedFile: File | null;
  imagePreview: string | ArrayBuffer | null;
  listOfType = ["internship", "Director","Work"];

  constructor(
    private service:AdminService,
    private fb:FormBuilder,
    private message: NzMessageService,
    private router : Router
  ) { }

  ngOnInit(){
    this.companyForm = this.fb.group({
      name:[null, Validators.required],
      description:[null, Validators.required],
    })
  }

  postCompany(){
    //console.log(this.companyForm.value);
    this.isSpinning = true;
    const formdata: FormData= new FormData();
    formdata.append("img",this.selectedFile);
    formdata.append("name",this.companyForm.get("name").value)
    formdata.append("description",this.companyForm.get("description").value)
    console.log(formdata);
    this.service.postCompany(formdata).subscribe((res) => {
      this.isSpinning= false;
      this.message.success("Company Added Successfully", {nzDuration: 5000})
      this.router.navigateByUrl("/admin/dashboard")
      console.log(res);
    },error=>{
      this.message.error("Something went wrong", {nzDuration: 5000})
    })
  }

  onFileSelected(event: any){
    this.selectedFile = event.target.files[0];
    this.previewImage();
  }

  previewImage(){
    const reader = new FileReader();
    reader.onload = () =>{
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(this.selectedFile);
  }

}
