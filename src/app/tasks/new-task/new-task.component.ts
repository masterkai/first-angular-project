import { Component, EventEmitter, Output } from '@angular/core';
import { NewTask } from "./new-task.model";
import { FormsModule } from '@angular/forms';

@Component( {
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
} )
export class NewTaskComponent {
  enterTitle = '';
  enterSummary = '';
  enterDueDate = '';
  @Output() addTask = new EventEmitter<NewTask>();
  @Output() cancel = new EventEmitter<void>();

  onAddTask() {
    this.addTask.emit( { title: this.enterTitle, summary: this.enterSummary, dueDate: this.enterDueDate } );
    this.enterTitle = '';
    this.enterSummary = '';
    this.enterDueDate = '';
  }

  onCancel() {
    this.cancel.emit();
  }
}
