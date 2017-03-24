import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { SharedModule } from './shared';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {reducer} from './reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    MaterialModule,
    SharedModule,
    AppRoutingModule,
    RouterStoreModule.connectRouter(),
    /**
     * StoreModule.provideStore is imported once in the root module, accepting a reducer
     * function or object map of reducer functions. If passed an object of
     * reducers, combineReducers will be run creating your application
     * meta-reducer. This returns all providers for an @ngrx/store
     * based application.
     */
    StoreModule.provideStore( reducer),
    StoreDevtoolsModule.instrumentStore(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
