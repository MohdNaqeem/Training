import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-condition',
  standalone: true,
  imports: [],
  templateUrl: './switch-condition.component.html',
  styleUrl: './switch-condition.component.css'
})
export class SwitchConditionComponent {
  color = 'red'

  handleColor(val:string){
    this.color = val
  }
}
