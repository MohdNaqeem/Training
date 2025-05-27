import { Component } from '@angular/core';

@Component({
  selector: 'app-condition-training',
  standalone: true,
  imports: [],
  templateUrl: './condition-training.component.html',
  styleUrl: './condition-training.component.css'
})
export class ConditionTrainingComponent {
  display = true
  x = 11
  toggleDiv = true

  hide(){
    this.display = false
  }
  showDiv(){
    this.display = true
  }
  toggle(){
    this.display = !this.display
  }

  hideContainer(val:number){
    this.x = val
  }

  toggleTwo(){
    this.toggleDiv = !this.toggleDiv
  }
}
