import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import {UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-user';
import { type User } from "./user/user.model";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  title = 'first-angular-project!!';
  selectedUser = signal<User | null>(null);
  selectedUserID: string | undefined;
  selectedUserName: string | undefined;
  onUserSelect(user: User) {
    this.selectedUser.set(user);
    this.selectedUserName = user.name;
    this.selectedUserID = user.id;
  }
}
