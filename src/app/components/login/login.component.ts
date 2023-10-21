import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private loginService: LoginService, private router: Router) { }

  login = {
    'username': '',
    'password': ''
  }

  submitForm() {
    this.loginService.loginUser(this.login).subscribe(
      (response: HttpResponse<any>) => {
        if (response.status === 200) {
          // HTTP status code is 200 (OK)
        } else {
          // Handle other status codes as needed
        }
      },
      (error) => {
        // Handle the error here
        if (error.status === 200) {
          // alert('logged in')
          const token = error.error.text // Replace with your actual token
          // console.log(token);
          localStorage.setItem('token', token);
          this.router.navigate(['/home']);
        } else if (error.status == 400) {
          alert('wrong password');
        } else if (error.status == 404) {
          alert('wrong username');
        }
      }
    );
  }

}