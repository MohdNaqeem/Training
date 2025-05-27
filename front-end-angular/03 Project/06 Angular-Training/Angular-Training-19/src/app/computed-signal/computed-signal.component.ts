import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-computed-signal',
  standalone: true,
  imports: [],
  templateUrl: './computed-signal.component.html',
  styleUrl: './computed-signal.component.css'
})
export class ComputedSignalComponent {
  x = signal (10) // writeable signal which we can change
  y = signal (20) // writeable signal which we can change
  z = computed(()=> this.x() + this.y()) // computed signal which we can't change directly, it will change automatically when dependencies will update  

  updateValue(){
    console.log(this.z())
    this.x.set(100)
    console.log(this.z())
  }
}
