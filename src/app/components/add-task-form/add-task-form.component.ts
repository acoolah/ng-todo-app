import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss'],
})
export class AddTaskFormComponent implements OnInit {
  @Output() addTaskEvent: EventEmitter<Task> = new EventEmitter();

  public taskText!: string;
  public taskDate!: string;
  public taskReminder: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  submitAddTask(): void {
    if (!this.taskText || !this.taskText.split(' ')) {
      alert('Please enter the task name');
      this.taskText = '';

      return;
    }
    if (!this.taskDate || !this.taskDate.split(' ')) {
      alert('Please enter the task date');
      this.taskDate = '';

      return;
    }

    const createdTask: Task = {
      id: +new Date(),
      text: this.taskText,
      day: this.taskDate,
      reminder: this.taskReminder,
    };

    this.addTaskEvent.emit(createdTask);

    this.taskText = '';
    this.taskDate = '';
    this.taskReminder = false;
  }
}
