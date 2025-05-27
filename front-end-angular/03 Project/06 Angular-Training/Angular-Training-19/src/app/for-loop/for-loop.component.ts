import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  standalone: true,
  imports: [],
  templateUrl: './for-loop.component.html',
  styleUrl: './for-loop.component.css'
})
export class ForLoopComponent {
  names =["Mohd", "Naqeem", "Raza", "Abubakar"]
  studentName : string = ''

  students = [
    {name : 'Mohd', age : 24, email : 'Mohd@gmail.com'},
    {name : 'Raza', age : 27, email : 'Raza@gmail.com'},
    {name : 'Momin', age : 26, email : 'Momin@gmail.com'},
  ]

  getName(val:string){
    this.studentName = val
  }
}
