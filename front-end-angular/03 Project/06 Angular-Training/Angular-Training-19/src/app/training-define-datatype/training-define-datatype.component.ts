import { Component } from '@angular/core';

@Component({
  selector: 'app-training-define-datatype',
  standalone: true,
  imports: [],
  templateUrl: './training-define-datatype.component.html',
  styleUrl: './training-define-datatype.component.css'
})
export class TrainingDefineDatatypeComponent {
  
  function (a:number,b:number) {
    console.log(a + b)
  }

  demo : string = 'Hello'
  functionString() {
    this.demo = 'this is string'
    console.log(this.demo)
  }
}
