import { Component, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-effect-signal',
  standalone: true,
  imports: [],
  templateUrl: './effect-signal.component.html',
  styleUrl: './effect-signal.component.css'
})
export class EffectSignalComponent {
  displayHeading = false
  number = signal(10)
  count = signal(0)
  displayCount = false

  constructor(){
    effect(()=>{
      console.log(this.number()) // for update value in console
      console.log(this.displayHeading)
      if(this.count()== 2){
        this.displayCount = true
        setTimeout(()=>{
        this.displayCount = false
        },3000)
      }else{
        this.displayCount = false
      }
    })
  }

  // for update value in console
  updateNumber(){
    this.number.set(20)
  }

  toggleDisplay(){
    this.displayHeading = !this.displayHeading
  }

  incCount(){
    this.count.set(this.count()+1)    
  }

  decCount(){
    if(this.count() > 0){
      this.count.set((this.count()-1))
    }
  }
}
