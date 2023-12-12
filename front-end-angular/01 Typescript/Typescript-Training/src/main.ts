import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

/* Chapter 1 Data types in typescript */

// First example from pdf 

let A = new Number(500);
let B : Number = 600;
let C: number = 700;
console.log('Value of A: ', A);
console.log('Value of B: ', B);
console.log('Value of C: ', C);
