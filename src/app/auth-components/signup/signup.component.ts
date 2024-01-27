  import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from 'src/app/auth-services/auth-service/auth.service';
  import {NzNotificationService} from "ng-zorro-antd/notification";
  import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  isSpinning: boolean;
  validateForm: FormGroup;

  confirmationValidator = (control: FormControl): { [s: string]: boolean}=>{
    if(!control.value){
      return {required: true};
    }else if (control.value !== this.validateForm.controls['password'].value){
      return {confirm:true,error:true}
    }
    return {};
  }
  constructor(private service: AuthService,
    private fb: FormBuilder, private notification:NzNotificationService, private  router : Router) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required,this.confirmationValidator]],
      name: [null, [Validators.required]],
    })
  }

  register() {
    console.log(this.validateForm.value);
    this.service.signup(this.validateForm.value).subscribe((res) => {
      console.log(res);
      if(res.id != null){
        this.notification.success("Succes","You are registered Successsufully",{nzDuration: 5000});
        this.router.navigateByUrl("/login")
      }else{
        this.notification.success("ERROR!!","Something went wrong",{nzDuration: 5000});
      }
    })
  }
}
