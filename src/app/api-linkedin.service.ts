import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiLinkedinService {
  apiUrl='https://api.linkedin.com/v2/simpleJobPostings?oauth2_access_token=86huxr6uth6rxj';

  constructor(private http: HttpClient) { }

  getJobs(jobid: string){
    return this.http.get(`${this.apiUrl}/${jobid}`);
  }
}
