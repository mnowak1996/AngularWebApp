import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent implements OnInit {

  @Output()
  UsersInfo = new EventEmitter<string>();
  @Output()
  GroupsInfo = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  setUsers() {
    this.UsersInfo.emit('go');
  }

  setGroups(){
    this.GroupsInfo.emit('go');
  }

}
