import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users = new Array<any>();
  roleId: any; // for path variable
  roleName: string = ""; // for parameters

  constructor(
    public readonly loginService: LoginService,
    private route: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(
      (params) => {
        this.roleName = params['roleName'];
      }
    );
    // this.loginService.getUsers().subscribe(
    //   (response) => { // get object from homeService
    //     this.users = response.jobName;
    //   }
    // );
  }

  formGroupLogin = new FormGroup({
    jobseekerEmail: new FormControl("", [Validators.required]),
    jobseekerPassword: new FormControl("", [Validators.required]),
  });

  onLogin() {
    if (this.formGroupLogin.valid) {
      this.loginService.postLogin(this.formGroupLogin.value).subscribe(
        (response) => {
          this.router.navigate(["job-find"]);;
        },
        (error) => {
          alert("error");
          alert(JSON.stringify(error));
        }
      );
    }
    else {
      alert("Form not valid");
    }
  }

  value = 'Clear me';
}
