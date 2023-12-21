import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainingCmpComponent } from './training-cmp/training-cmp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoPipePipe } from './Pipes/demo-pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
@NgModule({
  declarations: [
    AppComponent,
    TrainingCmpComponent,
    DemoPipePipe,
    HomeComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
