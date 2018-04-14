import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  isUser = false;
  isGroup = false;

  constructor() { }

  ngOnInit() {
  }
  setGroup() {
    this.isGroup = !this.isGroup;
    this.isUser = false;
  }
  setUser() {
    this.isUser = !this.isUser;
    this.isGroup = false;
  }

}
