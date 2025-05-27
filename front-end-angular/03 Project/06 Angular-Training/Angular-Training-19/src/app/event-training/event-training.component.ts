import { Component } from '@angular/core';

@Component({
  selector: 'app-event-training',
  standalone: true,
  imports: [],
  templateUrl: './event-training.component.html',
  styleUrl: './event-training.component.css'
})
export class EventTrainingComponent {
  getValue(get:Event){
    console.log("Function called",event?.type)
  }
}
