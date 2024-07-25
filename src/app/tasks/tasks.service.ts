import type { Task } from "./task.model";
import { type NewTask } from "./new-task/new-task.model";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

    private tasks: Task[] = [
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

    constructor() {
        const tasks = localStorage.getItem('tasks');
        if (tasks) {
            this.tasks = JSON.parse(tasks);
        }
    }

    getUserTasks(userId: string) {
        return this.tasks.filter(task => task.userId === userId);
    }
    addTask(new_task: NewTask, userID: string) {
        this.tasks.push({
            id: 't' + Math.random().toString(36).substr(2, 9),
            userId: userID,
            title: new_task.title,
            summary: new_task.summary,
            dueDate: new_task.dueDate,
        });
        this.saveTasks();
    }
    removeTask(taskId: string) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        this.saveTasks();
    }

    private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}
