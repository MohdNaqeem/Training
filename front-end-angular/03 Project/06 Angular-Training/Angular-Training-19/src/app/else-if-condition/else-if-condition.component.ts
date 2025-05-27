import { Component } from '@angular/core';

@Component({
  selector: 'app-else-if-condition',
  standalone: true,
  imports: [],
  templateUrl: './else-if-condition.component.html',
  styleUrl: './else-if-condition.component.css'
})
export class ElseIfConditionComponent {
color = 'blue'
getNumber = '1'

// with one function
getColor(val:string){
  this.getNumber = val
  console.log(val)
}

// with seprate function
getRed(){
  this.color = 'red'
}
getBlue(){
  this.color = 'blue'
}
getGreen(){
  this.color = 'green'
}
getGray(){
  this.color = 'gray'
}
}
