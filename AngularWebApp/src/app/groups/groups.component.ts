import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {


  GroupsList = Array<Group>();
  ID;
  ShowList = false;
  AddG = false;
  listRemoved;


  GroupName;
  constructor() { }

  ngOnInit() {
  }
  ShowListOfGroups() {
    if (this.ShowList !== true) {
      this.ShowList = true;
      this.AddG = false;
    }
  }
  AddGroup() {
    if (this.AddG !== true) {
      this.AddG = true;
      this.ShowList = false;
    }
  }
  AddNewGroup(name) {
    this.ID = this.GroupsList.length;
    name = new Group(this.GroupName, this.ID);
    this.GroupsList.push(name);
    this.GroupName = '';
  }
  RemoveGroup(id) {
    this.listRemoved = this.GroupsList.splice(id, 1);
  }


}
class Group {
  constructor(public groupName, public ID) {

  }
}
