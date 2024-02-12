import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingCmpComponent } from './training-cmp/training-cmp.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './admin/user/user.component';


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
  },
  {
    path:'admin', 
    loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)
  },
  {
    path:'User',
    loadChildren:()=>import('./user/user.module').then(mod=>mod.UserModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
