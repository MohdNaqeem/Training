import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  task = "";
  taskList : {id:number, taskName:string} [] = []

  addTask(){
    this.taskList.push({id:this.taskList.length+1,taskName:this.task})
  }

  deleteTask(taskId:number){
    this.taskList = this.taskList.filter((item)=> item.id!=taskId)
  }
}
