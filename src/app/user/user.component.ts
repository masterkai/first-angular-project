import {
  Component,
  Input,
  input,
  computed,
  EventEmitter,
  Output,
  output,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';
import { NgOptimizedImage } from '@angular/common';

export type User = { name: string; avatar: string; id: string };

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Output() select = new EventEmitter<User>();
  select = output<User>();
  // @Input() user!: User;
  user = input.required<User>();

  // get imagePath() {
  //   return '/users/' + this.user().avatar;
  // }
  imagePath = computed(() => '/users/' + this.user().avatar);

  onUserSelect() {
    this.select.emit(this.user());
  }
}
