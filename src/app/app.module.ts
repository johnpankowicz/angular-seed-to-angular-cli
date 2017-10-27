import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MeetingModule } from './meeting/meeting.module'
import { AddtagsModule } from './addtags/addtags.module'
import { FixasrModule } from './fixasr/fixasr.module'
import { SharedModule } from './shared/shared.module'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

import { AppData } from './appdata';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MeetingModule,
    AddtagsModule,
    FixasrModule,
    SharedModule
  ],
  exports: [
  ],
  providers: [AppData,
    {
      provide: AppData,
      useValue: window['APP_DATA']
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
