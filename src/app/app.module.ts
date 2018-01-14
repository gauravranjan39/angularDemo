import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { Component } from '@angular/core/src/metadata/directives';

const appRoutes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegisterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule, 
    ReactiveFormsModule, 
    RouterModule.forRoot(
      appRoutes),
  ],
  providers: [
  UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
