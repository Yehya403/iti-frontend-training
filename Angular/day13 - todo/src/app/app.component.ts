import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public taskList: any[];
  public result: string;

  public getTaskList(tasks: any[]) {
    this.taskList = tasks;
  }

  public updateTaskList(updatedTasks: any[]) {
    this.taskList = updatedTasks;
  }

  public completeTask(index: number) {
    this.taskList[index].isComplete = !this.taskList[index].isComplete;
  }
}
