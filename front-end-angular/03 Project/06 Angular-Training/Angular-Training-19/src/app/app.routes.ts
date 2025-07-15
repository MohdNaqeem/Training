import { Routes } from '@angular/router';
import { LoginForRoutingComponent } from './login-for-routing/login-for-routing.component';
import { LogoutForRoutingComponent } from './logout-for-routing/logout-for-routing.component';

export const routes: Routes = [
    {path:"login", component:LoginForRoutingComponent},
    {path:"logout", component:LogoutForRoutingComponent},

];
