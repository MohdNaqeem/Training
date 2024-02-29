import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsTrainingComponent } from './rxjs-training/rxjs-training.component';

const routes: Routes = [
  { path: 'rxjs-learning', component: RxjsTrainingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
