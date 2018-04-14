import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  Groups = Array<string>();
  Users = Array<User>();
  isUser = false;
  isGroup = false;
  isPanel = true;



  constructor() { }

  ngOnInit() {
  }
  setGroup() {
    this.isGroup = !this.isGroup;
    this.isUser = false;
    this.isPanel = false;
  }
  setUser(event?: string) {
    if (this.isUser !== true) {
      this.isUser = !this.isUser;
      this.isGroup = false;
      this.isPanel = false;
      if (event === 'go') {
        this.isPanel = false;
      }
    }
  }


}

interface User {
  Name: string;
  Password: string;
  FirstName: string;
  LastName: string;
  DateOfBirth: Date;
  GroupsUser: Array<string>;
}
