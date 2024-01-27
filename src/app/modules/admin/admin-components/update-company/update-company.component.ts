import { Component } from '@angular/core';
import {AdminService} from "../../admin-services/admin.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.scss']
})
export class UpdateCompanyComponent {

  isSpinning = false;
  companyId: number = this.activatedRoute.snapshot.params["id"];
  imgChanged: boolean = false;
  selectedFile: any;
  imagePreview:string|ArrayBuffer|null;
  existingImage: string | null = null;
  updateForm: FormGroup;

  constructor(private adminService: AdminService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private message: NzMessageService,
              private router: Router) {
  }

  ngOnInit(){
    this.updateForm = this.fb.group({
      name:[null, Validators.required],
      description:[null, Validators.required],
    })
    this.getCompanyById();
  }

  getCompanyById(){
    this.isSpinning = true;
    this.adminService.getCompanyById(this.companyId).subscribe((res)=> {
      this.isSpinning = false;
      //console.log(res);
      const companyDto = res;
      this.existingImage = 'data:Image/jpeg;base64,' + res.returnedImg;
      console.log(companyDto);
      console.log(this.existingImage);
      this.updateForm.patchValue(companyDto);
    })
  }

  updateCompany(){
    //console.log(this.companyForm.value);
    this.isSpinning = true;
    const formdata: FormData= new FormData();
    if(this.imgChanged && this.selectedFile)
    {
      formdata.append("img",this.selectedFile);
    }
    formdata.append("name",this.updateForm.get("name").value)
    formdata.append("description",this.updateForm.get("description").value)
    console.log(formdata);
    this.adminService.updateCompany(this.companyId , formdata).subscribe((res) => {
      this.isSpinning= false;
      this.message.success("Company updated Successfully", {nzDuration: 5000})
      this.router.navigateByUrl("/admin/dashboard")
      console.log(res);
    },error=>{
      this.message.error("Something went wrong", {nzDuration: 5000})
    })
  }

  onFileSelected(event:any){
    this.selectedFile = event.target.files[0];
    this.imgChanged = true;
    this.existingImage= null;
    this.previewImage();
  }

  previewImage(){
    const reader = new FileReader();
    reader.onload = () =>{
      this.imagePreview = reader.result;
    }
    reader.readAsDataURL(this.selectedFile);
  }


}
