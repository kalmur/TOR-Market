import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IUserForLogin } from 'src/app/model/user';
import { AlertifyService } from '../../services/alertify.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private alertify: AlertifyService,
              private router: Router) { }

  ngOnInit() {

  }

  onLogin(loginForm : NgForm) {
    console.log(loginForm.value);
    this.authService.authUser(loginForm.value).subscribe(
      (response: IUserForLogin) => {
        console.log(response);
        const user = response;
        localStorage.setItem("token", user.token);
        localStorage.setItem("userName", user.userName);
        this.alertify.success("Login successful!");
        this.router.navigate(["/"]);
      }
    );

    // if (token) {
    //   localStorage.setItem("token", token.userName)
    //   this.alertify.success("Login successful!");
    //   this.router.navigate(["/"]);
    // } else {
    //   this.alertify.error("Login unsuccessful!");
    // }
  }
}
