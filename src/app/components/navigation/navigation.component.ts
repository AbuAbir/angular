import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'tcs-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  name = "navigation";

  isUserLoggedIn = false;

  constructor(private user: UserService) { }

  ngOnInit(): void {
    this.user.userInfo.subscribe((response) => {
      this.isUserLoggedIn = response ? true : false;
    })
  }



}
