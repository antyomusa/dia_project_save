import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {

  constructor(
    public readonly authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) { }

  jobs: Array<any> = [];
  singleJobs: any;


  ngOnInit(): void {
    // let id = 0;
    // this.activatedRoute.paramMap.subscribe((data: any) => {
    //   id = data.params.id


    //   this.authService.getRecentJob().subscribe((res: any) => {
    //     this.jobs = res
    //     this.jobs = this.jobs.filter((data: any) => data.jobId == id);
    //     this.singleJobs = this.jobs[0];
    //     console.log(this.singleJobs)
    //   }, (error: any) => {
    //     console.log(error)
    //   })
    // })
  }

  opened = false;

}
