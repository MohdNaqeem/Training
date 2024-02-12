import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  dummyData: number[] = Array.from({ length: 10 }, (_, i) => i + 1); // Dummy data with numbers from 1 to 10

  constructor() { }
}
