import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type Task } from './task.model';
import { NewTask } from "./new-task/new-task.model";
import { TasksService } from "./tasks.service";

@Component( {
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
} )
export class TasksComponent {
  isAddTaskVisible = false;
  @Input() selectedUserID!: string;
  @Input() selectedUserName: string | undefined;

  constructor(private tasksService: TasksService) {}


  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.selectedUserID);
  }

  onCompleteTask(taskId: string) {
    this.tasksService.completeTask(taskId);
  }

  onStartAddTask() {
    this.isAddTaskVisible = true;
  }

  onCloseAddTask() {
    this.isAddTaskVisible = false;
  }
}
