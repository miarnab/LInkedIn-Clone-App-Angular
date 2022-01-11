import { Component, OnInit } from '@angular/core';
import { ApiLinkedinService } from '../api-linkedin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  [job: string]: any;
  constructor(private apilinkedinService: ApiLinkedinService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const jobid = params['companyid'];
      this.apilinkedinService
          .getJobs(jobid)
            .subscribe(job => this['job'] = job);
    });
  }

}
