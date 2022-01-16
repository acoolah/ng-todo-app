import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() deleteTaskEvent: EventEmitter<Task> = new EventEmitter();
  @Output() toggleReminderEvent: EventEmitter<Task> = new EventEmitter();

  icon = faTimes;

  constructor() {}

  ngOnInit(): void {}

  deleteTask(task: Task): void {
    this.deleteTaskEvent.emit(task);
  }

  toggleReminder(task: Task): void {
    this.toggleReminderEvent.emit(task);
  }
}
