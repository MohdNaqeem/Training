import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './component/cart/cart.component';
import { HeaderComponent } from './component/header/header.component';
import { ProductsComponent } from './component/products/products.component';
import {HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './Shared/filter.pipe'
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderDetailsPopupComponent } from './order-details-popup/order-details-popup.component';
import { OrderPlacedComponent } from './order-placed/order-placed.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignUpPageComponent } from './component/sign-up-page/sign-up-page.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { DiscountCardComponent } from './component/discount-card/discount-card.component';
import { FooterComponent } from './component/footer/footer.component';
import { UserAccessesComponent } from './component/user-accesses/user-accesses.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HeaderComponent,
    ProductsComponent,
    FilterPipe,
    OrderDetailsPopupComponent,
    OrderPlacedComponent,
    LoginPageComponent,
    SignUpPageComponent,
    CarouselComponent,
    DiscountCardComponent,
    FooterComponent,
    UserAccessesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
