import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { WtNavbarModule } from '@shared/components';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home/home-page/home-page.component';

import { registerLocaleData } from '@angular/common';
import { appStateReducer } from '@store/appState/appState.reducer';
import { environment } from '~/environments/environment';
import localeRu from '@angular/common/locales/ru';

registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    WtNavbarModule,
    StoreModule.forRoot({appState: appStateReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
