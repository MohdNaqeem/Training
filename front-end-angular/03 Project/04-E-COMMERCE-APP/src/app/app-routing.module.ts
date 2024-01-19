import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './component/products/products.component';
import { CartComponent } from './component/cart/cart.component';
import { OrderPlacedComponent } from './order-placed/order-placed.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { DiscountCardComponent } from './component/discount-card/discount-card.component';
import { UserAccessesComponent } from './component/user-accesses/user-accesses.component';

const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent},
  {path:'order-placed', component: OrderPlacedComponent},
  {path:'login-page', component:LoginPageComponent},
  {path:'discout-card', component:DiscountCardComponent},
  {path:'user-accesses', component:UserAccessesComponent,}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
