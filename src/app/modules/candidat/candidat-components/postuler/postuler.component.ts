import { Component } from '@angular/core';
import {CandidatService} from "../../candidat-services/candidat.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NzMessageService} from "ng-zorro-antd/message";
import {StorageService} from "../../../../auth-services/storage-service/storage.service";

@Component({
  selector: 'app-postuler',
  templateUrl: './postuler.component.html',
  styleUrls: ['./postuler.component.scss']
})
export class PostulerComponent {

  companyId: number = this.activatedRoute.snapshot.params["id"];
  company:any;
  processedImg:any;
  validatForm!:FormGroup;
  isSpinning= false;
  selectedFile: File | null;
  imagePreview: string | ArrayBuffer | null;


  constructor(private  service: CandidatService,
              private activatedRoute: ActivatedRoute,
              private fb : FormBuilder,
              private message: NzMessageService,
              private router : Router) {
  }

  ngOnInit(){
    this.validatForm=this.fb.group({
      name:[null, Validators.required]
    })
    this.getCompanyById();
  }

  getCompanyById(){
    this.service.getCompanyById(this.companyId).subscribe((res)=>{
      console.log(res);
      this.processedImg ='data:Image/jpeg;base64,' + res.returnedImg;
      this.company=res;
    })
  }

  postuler(){
    this.isSpinning = true;
    const formdata: FormData= new FormData();
    formdata.append("img",this.selectedFile);
    formdata.append('userId', StorageService.getUser().userId.toString());
    console.log(formdata);
    this.service.postuler(formdata).subscribe((res) => {
      this.isSpinning= false;
      this.message.success("Company Postuler Successfully", {nzDuration: 5000})
      this.router.navigateByUrl("/candidat/dashboard")
      console.log(res);
    },error=>{
      this.message.error("Something went wrong", {nzDuration: 5000})
    })
    this.isSpinning = true;


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
