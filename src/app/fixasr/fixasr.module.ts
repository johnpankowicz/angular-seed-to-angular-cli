// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { MaterialModule } from '@angular/material';
import { FixasrComponent } from './fixasr.component';
import { VideoModule } from '../video/video.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FixasrComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    VideoModule
    //MaterialModule.forRoot(),
  ],
  providers: [],
})
export class FixasrModule { }

