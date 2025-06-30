import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-style',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-style.component.html',
  styleUrl: './dynamic-style.component.css'
})
export class DynamicStyleComponent {
  bgColor = 'red'
  fontSize = '30'

  zoom = false
}
