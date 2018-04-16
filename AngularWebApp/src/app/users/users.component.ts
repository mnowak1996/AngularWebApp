import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  Groups = Array<string>();
  UsersList = Array<User>();
  Name: string;
  Password: string;
  FirstName: string;
  LastName: string;
  DateOfBirth: Date;
  GroupsUser: Array<string>;
  ID: number;
  ChooseAGr = false;
  editUser = false;

  list26;

  //  user1 =new User(michal,haslo,michal1);

  AddUserForm = false;
  ShowList = false;
  constructor() { }

  ngOnInit() {
  }
  ShowListOfUsers() {
    if (this.ShowList !== true) {
      this.ShowList = true;
      this.AddUserForm = false;
      this.editUser=false;
    }
  }
  AddUser() {
    if (this.AddUserForm !== true) {
      this.AddUserForm = true;
      this.ShowList = false;
      this.editUser = false;

    }

  }
  AddNewUser(newUserName) {
    this.ID = this.UsersList.length;
    newUserName = new User(newUserName, this.Password, this.FirstName, this.LastName, this.DateOfBirth, this.ID);
    this.UsersList.push(newUserName);
    this.Name = '';
    this.Password = '';
    this.FirstName = '';
    this.LastName = '';
  }
  RemoveUser(id) {
    this.list26 = this.UsersList.splice(id, 1);
    // console.log(this.list26);
  }
  ChooseAGroup() {
    this.ChooseAGr = true;
  }
  EditUser(user) {
    if (this.editUser !== true) {
      this.editUser = true;
      this.ShowList = false;
      this.AddUserForm = false;
      this.Name = user.name;
      this.Password = user.password;
      this.FirstName = user.firstName;
      this.LastName = user.lastName;
      this.DateOfBirth = user.dateOfBirth;
    }
  }
  UpdateUser(Name, id) {
    this.list26 = this.UsersList.splice(id, 1);
    this.AddNewUser(name);

  }

}
class User {
  constructor(public name: string, public password: string, public firstName: string, public lastName, public dateOfBirth, public ID) {
    // password='haslo';
    // firstName='firmane';

  }
  // Name: string;
  // Password: string;
  // FirstName: string;
  // LastName: string;
  // DateOfBirth: Date;
  // GroupsUser: Array<string>;
}
