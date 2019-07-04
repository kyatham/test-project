/*
  This component is used to provide the user information.
  It provides a container with the thumbnail, user's first/last name etc.
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.less']
})
export class UserInfoComponent implements OnInit {

  constructor() { }

  @Input() user;

  ngOnInit() {
  }
}
