import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';
import { UIService } from 'src/app/services/ui.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public list: Task[] = [];
  public showForm!: boolean;
  public subscription!: Subscription;

  constructor(private taskService: TaskService, private uiService: UIService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showForm = value));
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((taskList) => (this.list = taskList));
  }

  doDelete(task: Task): void {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.list = this.list.filter((_task) => _task.id !== task.id))
      );
  }

  doToggleReminder(task: Task): void {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  doAddTask(task: Task): void {
    this.taskService
      .addTask(task)
      .subscribe((addedTask) => (this.list = [...this.list, addedTask]));
  }
}
