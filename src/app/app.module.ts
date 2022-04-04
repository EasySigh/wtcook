import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';

import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/reducers/user.reducer';


import { AppComponent } from './app.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { HomeLayoutComponent } from './home/layout/home-layout.component';


@NgModule({
  declarations: [
    HomePageComponent,
    AppComponent,
    HomeLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot({user: userReducer}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
