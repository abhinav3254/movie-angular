import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfileService } from '../profile.service';
import { HttpResponse } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent {

  isCorrectPassword = false;

  constructor(
    private profileService: ProfileService,
    private dialogRef: MatDialogRef<PasswordChangeComponent>
  ) { }

  checkPassword = {
    newPassword: '',
    cnfPassword: ''
  }

  passwordChange(form: any) {
    const password = {
      oldPassword: form.oldPassword,
      newPassword: form.newPassword
    }

    if (form.newPassword === form.cnfPassword) {
      this.profileService.changePassword(password).subscribe(
        (response: HttpResponse<any>) => {
          if (response.status === 200) {
            // HTTP status code is 200 (OK)
            console.log('submitted')
          } else {
            // Handle other status codes as needed
          }
        },
        (error) => {
          // Handle the error here
          if (error.status === 200) {
            this.dialogRef.close();
            alert('password changed')
          } else if (error.status == 400) {
            alert('wrong password');
          } else if (error.status == 404) {
            alert('wrong username');
          }
        }
      );
    }
  }

  checkPasswordFunction() {
    if (this.checkPassword.newPassword !== this.checkPassword.cnfPassword && this.checkPassword.newPassword.length > 0) {
      this.isCorrectPassword = true; // Set to true to display the "password mismatch" message
    } else {
      this.isCorrectPassword = false; // Reset to false when the passwords match
    }
  }

}
