import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile | undefined;

  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(
      (data) => {
        this.profile = data as Profile;
      },
      (error) => {
        if (error.status === 200) {
        } else if (error.status == 401) {
          alert('session expired');
          this.router.navigate(['/']);
        }
      }
    )
  }
}

export interface Profile {
  name: string
  email: string
  username: string
  phone: string
  gender: string
  status: string
  role: string
  dateOfBirth: string
  lastLogIn: string
  registerDate: string
}
