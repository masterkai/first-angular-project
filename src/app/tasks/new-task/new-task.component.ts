import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { NewTask } from "./new-task.model";
import { FormsModule } from '@angular/forms';
import { TasksService } from "../tasks.service";

@Component( {
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
} )
export class NewTaskComponent {
  @Input() selectedUserID!: string;
  enterTitle = '';
  enterSummary = '';
  enterDueDate = '';
  @Output() close = new EventEmitter<void>();
  private tasksService = inject(TasksService);

  onAddTask() {
    this.tasksService.addTask({ title: this.enterTitle, summary: this.enterSummary, dueDate: this.enterDueDate },this.selectedUserID );
    this.enterTitle = '';
    this.enterSummary = '';
    this.enterDueDate = '';
    this.onCancel();
  }

  onCancel() {
    this.close.emit();
  }
}
