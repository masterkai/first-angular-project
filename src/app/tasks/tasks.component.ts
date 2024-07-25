import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type Task } from './task.model';
import { NewTask } from "./new-task/new-task.model";

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
  tasks: Task[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]

  get selectedUserTasks() {
    return this.tasks.filter( task => task.userId === this.selectedUserID );
  }

  onCompleteTask(taskId: string) {
    this.tasks = this.tasks.filter( task => task.id !== taskId );
  }

  idGenerator() {
    return 't' + Math.random().toString( 36 ).substr( 2, 9 );
  }

  onStartAddTask() {
    this.isAddTaskVisible = true;

  }

  onCancelAddTask() {
    this.isAddTaskVisible = false;
  }

  onAddTask(newTask: NewTask) {
    this.tasks.push( {
      id: this.idGenerator(),
      userId: this.selectedUserID,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.dueDate,
    } );
    this.isAddTaskVisible = false;
  }
}
