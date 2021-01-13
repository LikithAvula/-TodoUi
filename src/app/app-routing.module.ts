import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { TodoListsComponent } from './todo-lists/todo-lists.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGaurdService } from './service/route-gaurd.service';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';

const routes: Routes = [{path:'', component:LoginComponent},
                        {path:'login', component:LoginComponent},
                        {path:'createAccount',component:CreateAccountComponent},
                        {path:'welcome/:name',component:WelcomeComponent,canActivate:[RouteGaurdService]}, 
                        {path:'todos',component:TodoListsComponent,canActivate:[RouteGaurdService]},    
                        {path:'logout',component:LogoutComponent ,canActivate:[RouteGaurdService]}, 
                        {path: 'add', component:TodoAddComponent,canActivate:[RouteGaurdService]},
                        {path : 'edit/:id', component: TodoEditComponent,canActivate:[RouteGaurdService]},                   
                        {path:'**', component:ErrorComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
