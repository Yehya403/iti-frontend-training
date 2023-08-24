import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  public taskInput: string;
  public taskList: any[] = [];

  @Output() addTaskEmitter = new EventEmitter();

  public onAddTask() {
    const index = this.taskList.findIndex(
      (task) => task.taskLabel === this.taskInput
    );
    if (index === -1) {
      this.taskList.push({ taskLabel: this.taskInput, isComplete: false });
      this.taskInput = null;
      this.addTaskEmitter.emit(this.taskList);
    }
  }
}
