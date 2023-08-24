import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() tasks: any[];
  @Output() deleteTaskEmitter = new EventEmitter();
  @Output() completeTaskEmitter = new EventEmitter();

  public deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.deleteTaskEmitter.emit(this.tasks);
  }

  public changeTaskStatus(index: number) {
    this.completeTaskEmitter.emit(index);
  }
}
