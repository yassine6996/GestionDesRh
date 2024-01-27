import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {StorageService} from "../../../auth-services/storage-service/storage.service";

const BASIC_URL = ["http://localhost:8080/"]

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  constructor(private http: HttpClient) { }

  getAllCompanies():Observable<any>{
    return this.http.get(BASIC_URL + "api/candidat/companies",{
      headers: this.createAuthorizationHeader()
    })
  }

  getCompanyById(companyId: number):Observable<any>{
    return this.http.get(BASIC_URL + "api/candidat/company/" + companyId,{
      headers: this.createAuthorizationHeader()
    })
  }

  postuler(postulerDto: any):Observable<any>{
    return this.http.post(BASIC_URL + "api/candidat/company/postuler/" + postulerDto,{
      headers: this.createAuthorizationHeader()
    })
  }

  createAuthorizationHeader():HttpHeaders{
    let authHeaders: HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      'Authorization','Bearer ' + StorageService.getToken()
    );
  }

}
