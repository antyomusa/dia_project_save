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

  // users = new Array<any>();
  // roleId: any; // for path variable
  // roleName: string = ""; // for parameters

  data: any;

  formGroupLogin = new FormGroup({
    jobseekerEmail: new FormControl("", [Validators.required, Validators.email, Validators.minLength(8)]),
    jobseekerPassword: new FormControl("", [Validators.required, Validators.minLength(8)]),
  });

  constructor(
    // public readonly loginService: LoginService,
    // private route: ActivatedRoute,
    // private readonly router: Router
    public readonly loginService: LoginService, private router: Router) {
    this.formGroupLogin.controls["jobseekerEmail"].setValue("");

    this.data = this.formGroupLogin.controls['jobseekerEmail'].value;
  }

  ngOnInit(): void {

    // this.route.queryParams.subscribe(
    //   (params) => {
    //     this.roleName = params['roleName'];
    //   }
    // );
  }

  // formGroupLogin = new FormGroup({
  //   jobseekerEmail: new FormControl("", [Validators.required]),
  //   jobseekerPassword: new FormControl("", [Validators.required]),
  // });

  // onLogin() {
  //   if (this.formGroupLogin.valid) {
  //     this.loginService.postLogin(this.formGroupLogin.value).subscribe(
  //       (response) => {
  //         this.router.navigate(["job-find"]);;
  //       },
  //       (error) => {
  //         alert("error");
  //         alert(JSON.stringify(error));
  //       }
  //     );
  //   }
  //   else {
  //     alert("Form not valid");
  //   }
  // }

  // value = 'Clear me';

  checkValidation() {
    alert(this.formGroupLogin.controls['jobseekerEmail'].valid);
    alert(this.formGroupLogin.controls['jobseekerPassword'].valid);
  }

  onLogin() {
    const data = this.formGroupLogin.value;
    if (data.jobseekerEmail && data.jobseekerPassword) {
      this.loginService.postLogin(data).subscribe(
        (response) => {
          this.data = response;
          localStorage.setItem('id_token', this.data.token);
          this.router.navigate(['job-find'])
        },
        (error) => {
          alert(error.error.message);
        }
      )
    } else {
      alert("error");
    }
  }
}
