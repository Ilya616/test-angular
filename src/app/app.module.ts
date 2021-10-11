import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { CommentformComponent } from './components/commentform/commentform.component';
import { AddcommentComponent } from './components/addcomment/addcomment.component';


@NgModule({
  declarations: [
    AppComponent,
    CommentformComponent,
    AddcommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
