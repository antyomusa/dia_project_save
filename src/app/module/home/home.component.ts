import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  jobs = new Array<any>();

  constructor(
    private readonly router: Router,
    public readonly authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.authService.getRecentJob().subscribe(
      (response) => {
        this.jobs = response;
        // if (response.success == true) {
        //   this.jobs = response.jobDesc;
        // } else {
        //   this.jobs = [];
        // }
      },
      (error) => {

      }
    );
  }


  submitLogin() {
    this.router.navigate(["login"]);
  };



}
