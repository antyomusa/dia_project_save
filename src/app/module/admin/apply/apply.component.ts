import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/services/job/job.service';
import { ApplyModel } from './model/apply.model';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {

  applyModel = new ApplyModel();

  constructor(
    public readonly jobService: JobService,
    public readonly router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((data: any) => {
      let id = data.params.id,
        params = {
          jobId: id,
          jobStatus: "visible"
        }

      this.jobService.getDetailJob(params).subscribe(
        (response: any) => {
          this.applyModel.singleJobs = response.data;
          console.log(this.applyModel.singleJobs)
        },
        (error) => {
          this.applyModel.singleJobs = error.error;
        })
    })
  }

}
