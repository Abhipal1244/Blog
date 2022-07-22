import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './MyComponent/create/create.component';
import { HomeComponent } from './MyComponent/home/home.component';
import { ViewComponent } from './MyComponent/view/view.component';
import { ManageComponent } from './MyComponent/manage/manage.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    HomeComponent,
    ViewComponent,
    ManageComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
