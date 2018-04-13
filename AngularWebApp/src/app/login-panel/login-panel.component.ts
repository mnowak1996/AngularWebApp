import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.css']
})
export class LoginPanelComponent implements OnInit {

  @Output()
  LoginInfo = new EventEmitter<string>();

  UserName: string;
  UserPassword: string;
  NameDef = 'name';
  PassDef = 'pass';
  inputText = 'jakis tekst';
  truly = false;
  constructor() { }

  ngOnInit() {
  }

  check() {
    if (this.UserName !== this.NameDef) {
      this.truly = true;
      console.log(true);
    } else {
      this.LoginInfo.emit('Logged');
    }
  }

}
