import { Component } from '@angular/core';

@Component({
  selector: 'app-loop-contextual-variables',
  standalone: true,
  imports: [],
  templateUrl: './loop-contextual-variables.component.html',
  styleUrl: './loop-contextual-variables.component.css'
})
export class LoopContextualVariablesComponent {
  users = ['Momin', 'Mohd', 'Naqeem', 'Raza', 'Abubakar',]
  // users = []
}
