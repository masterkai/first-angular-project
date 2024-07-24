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
import { type User } from "./user.model";

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
  user = input.required<User>();
  @Input({required: true}) selected!: boolean;
  // get imagePath() {
  //   return '/users/' + this.user().avatar;
  // }
  imagePath = computed(() => '/users/' + this.user().avatar);

  onUserSelect() {
    this.select.emit(this.user());
  }
}
