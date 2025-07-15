import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-basic-routing',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './basic-routing.component.html',
  styleUrl: './basic-routing.component.css'
})
export class BasicRoutingComponent {

}
