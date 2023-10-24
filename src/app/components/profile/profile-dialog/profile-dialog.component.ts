import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfileDialogService } from './profile-dialog.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-profile-dialog',
  templateUrl: './profile-dialog.component.html',
  styleUrls: ['./profile-dialog.component.css']
})
export class ProfileDialogComponent {

  constructor(
    private http: HttpClient,
    private profileService: ProfileDialogService,
    private dialogRef: MatDialogRef<ProfileDialogComponent>
  ) { }

  updateProfileForm(updateProfile: NgForm) {
    this.profileService.UpdateProfile(updateProfile.value).subscribe(
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
          window.location.reload();
        } else if (error.status == 400) {
          alert('wrong password');
        } else if (error.status == 404) {
          alert('wrong username');
        }
      }
    );
  }

}