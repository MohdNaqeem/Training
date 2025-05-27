import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  standalone: true,
  imports: [],
  templateUrl: './counter-app.component.html',
  styleUrl: './counter-app.component.css',
})
export class CounterAppComponent {
  count = 0;
  // handling with seprate function
  handleIncrement() {
    this.count = this.count + 1;
  }
  handledecrement() {
    this.count = this.count - 1;
  }
  reset() {
    this.count = 0;
  }

  // with condition
  handleCounter(val: string) {
    if (val === 'plus') {
      this.count = this.count + 1;
    } else if (val === 'minus') {
      if (this.count > 0) {
        this.count = this.count - 1;
      }
    } else {
      this.count = 0;
    }
  }
}
