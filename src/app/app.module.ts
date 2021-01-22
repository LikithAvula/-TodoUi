import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { TodoListsComponent } from './todo-lists/todo-lists.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { AuthenticationInterceptorService } from './service/http/authentication-interceptor.service';
import { ProfileComponent } from './profile/profile.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    ErrorComponent,
    TodoListsComponent,
    CreateAccountComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    TodoAddComponent,
    TodoEditComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthenticationInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
