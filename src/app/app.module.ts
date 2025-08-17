import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostDashboardComponent } from './shared/component/post-dashboard/post-dashboard.component';
import { PostformComponent } from './shared/component/postform/postform.component';
import { PostComponent } from './shared/component/post/post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./shared/module/material/material.module";
import { SinglepostComponent } from './shared/component/singlepost/singlepost.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDilogComponent } from './shared/component/mat-dilog/mat-dilog.component';

@NgModule({
  declarations: [
    AppComponent,
    PostDashboardComponent,
    PostformComponent,
    PostComponent,
    SinglepostComponent,
    MatDilogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
