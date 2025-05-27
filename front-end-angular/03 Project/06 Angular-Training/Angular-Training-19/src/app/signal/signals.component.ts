import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
  count = signal(10)
  property = 20

  constructor(){
    effect(()=>{
      // console.log(this.property)
      console.log(this.count() + " " + "Signal called")
    })
  }

  updateValue(){
    this.count.set(5)
  }
  updateProperty(){
    // this.property = 30
    this.property = 30
  }

  changeValue(val:string){
    if(val == 'inc'){
      this.count.set(this.count()+1)
    }else if (this.count() > 0) {
      this.count.set(this.count()-1)
    }
  }
}
