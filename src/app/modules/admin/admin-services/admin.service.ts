import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {StorageService} from "../../../auth-services/storage-service/storage.service";

const BASIC_URL = ["http://localhost:8080/"]

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  postCompany(companyDto: any):Observable<any>{
    return this.http.post<[]>(BASIC_URL + "api/admin/company",companyDto,{
      headers: this.createAuthorizationHeader()
    })
  }

  getAllCompanies():Observable<any>{
    return this.http.get(BASIC_URL + "api/admin/companies",{
      headers: this.createAuthorizationHeader()
    })
  }

  deletCompany(id:number):Observable<any>{
    return this.http.delete(BASIC_URL + "api/admin/company/" + id,{
      headers: this.createAuthorizationHeader()
    });
  }

  getCompanyById(id: number):Observable<any>{
    return this.http.get(BASIC_URL + "api/admin/company/" + id,{
      headers: this.createAuthorizationHeader()
    });
  }

  updateCompany(companyId: number, companyDto: any): Observable<any> {
    return this.http.put(BASIC_URL + "api/admin/company/" + companyId, companyDto,{
      headers: this.createAuthorizationHeader()
    });
  }
  createAuthorizationHeader():HttpHeaders{
    let authHeaders: HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      'Authorization','Bearer ' + StorageService.getToken()
    );
  }

}
