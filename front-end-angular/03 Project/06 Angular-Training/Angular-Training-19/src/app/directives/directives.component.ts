import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {
  students = ['Momin', 'Naqeem', 'Raza', 'Mohammad'];

  studentsData = [
    {
      name: 'Naqeem',
      age: 22,
      email: 'mominnaqeem@gmail.com',
    },
    {
      name: 'Momin',
      age: 21,
      email: 'momin@gmail.com',
    },
    {
      name: 'Raza',
      age: 24,
      email: 'Raza@gmail.com',
    },
    {
      name: 'Khan',
      age: 25,
      email: 'Khan@gmail.com',
    },
    {
      name: 'Mohammad',
      age: 64,
      email: 'Mohammad@gmail.com',
    },
  ];

  condition = false
}
