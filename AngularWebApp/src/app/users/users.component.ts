import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  Groups = Array<string>();
  Users = Array<User>();
  Name: string;
  Password: string;
  FirstName: string;
  LastName: string;
  DateOfBirth: Date;
  GroupsUser: Array<string>;
  User1 = new User;

  AddUserForm = false;
  constructor() { }

  ngOnInit() {
  }
  AddUser() {
    this.AddUserForm = true;
  }
  AddNewUser() {
    this.Users.push(this.User1);
    console.log(this.User1.Name);

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
class User {
  Name: string;
  Password: string;
  FirstName: string;
  LastName: string;
  DateOfBirth: Date;
  GroupsUser: Array<string>;
}
