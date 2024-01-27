import { Component } from '@angular/core';
import {StorageService} from "./auth-services/storage-service/storage.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gestionrh-angular';

  isAdminLoggedIn: boolean = StorageService.isAdminLoggedIn();
  isCandidatLoggedIn: boolean = StorageService.isCandidatLoggedIn();

  constructor(private router: Router) {
  }

  ngOnInit(){
    this.router.events.subscribe(event =>{
      if(event.constructor.name === "NavigationEnd"){
        this.isAdminLoggedIn = StorageService.isAdminLoggedIn();
        this.isCandidatLoggedIn = StorageService.isCandidatLoggedIn();
      }
    })
  }

  logout(){
    StorageService.signout();
    this.router.navigateByUrl("/login");
  }

}
