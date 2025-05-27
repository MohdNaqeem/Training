import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal-type',
  standalone: true,
  imports: [],
  templateUrl: './signal-type.component.html',
  styleUrl: './signal-type.component.css'
})
export class SignalTypeComponent {
count  : WritableSignal< number | string >= signal(10)

data : WritableSignal<number> = signal(1)
// number = signal <number | string>(10) // same as above just syntax is different

changeCount(){
  this.count.set('Hello') 
}

updateCount(){
  this.count.update((val)=> 30)
}

incData(){
  this.data.update((val)=> val+1)
}

}
