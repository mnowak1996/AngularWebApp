import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginPanelComponent } from './login-panel/login-panel.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UsersComponent } from './users/users.component';
import { GroupsComponent } from './groups/groups.component';
import { MainPanelComponent } from './main-panel/main-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPanelComponent,
    UserPanelComponent,
    UsersComponent,
    GroupsComponent,
    MainPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
