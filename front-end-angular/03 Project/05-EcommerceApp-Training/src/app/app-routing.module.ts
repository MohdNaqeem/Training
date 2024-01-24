import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingCmpComponent } from './training-cmp/training-cmp.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    component : TrainingCmpComponent,
    path : 'train-cmp'
  },
  {
    component : HomeComponent,
    path : 'home'
  },
  {
    component : UserComponent,
    path : 'user'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
