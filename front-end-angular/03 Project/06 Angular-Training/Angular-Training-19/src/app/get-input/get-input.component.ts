import { Component } from '@angular/core';

@Component({
  selector: 'app-get-input',
  standalone: true,
  imports: [],
  templateUrl: './get-input.component.html',
  styleUrl: './get-input.component.css'
})
export class GetInputComponent {
  name = ''
  displayName=''
  email = ''

  getValue(get:Event){
    console.log(get.target)
   this.name = (get.target as HTMLInputElement).value
   console.log(this.name)
  }

  showName(){
    this.displayName = this.name
  }

  setName(){
    this.name="Raza"
    console.log(this.name)
  }

  getEmail(val:string){
    console.log(val)
    this.email = val
  }

  setEmail(){
    this.email = "default@gmail.com"
  }
}
