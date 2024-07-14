import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() user: any;
  get imagePath() {
    return '/users/' + this.user.avatar;
  }
  onUserSelect(user: any) {
    console.log(user);
  }
}
