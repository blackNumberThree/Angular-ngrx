import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { usersReducer } from  './users/users.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component'
@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({users: usersReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
