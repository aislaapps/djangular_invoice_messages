import { Component, OnInit } from '@angular/core';

import { UserInfo } from '../models/user-info';
import { UserInfoService } from './user-info.service'

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  user : UserInfo;
  constructor(
    private userInfoService: UserInfoService
  ) { }

  ngOnInit() {
      this.getUserId();
  }

  getUserId(): void {
    this.userInfoService
        .getUserInfo()
        .subscribe( user => {
            this.user = user;
            console.log('amy this.user:',this.user)
          },
          error => {
            console.log('Error:', error.status, ' ', error.statusText);
          }

        )
  }

}
