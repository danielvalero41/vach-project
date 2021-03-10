import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlatilloComponent } from './vistas/kleinman/platillo/platillo.component';
import { RegistroRestaurantComponent } from './vistas/kleinman/registro-restaurant/registro-restaurant.component';
import { TodosPlatillosComponent } from './vistas/kleinman/todos-platillos/todos-platillos.component';
import { ContactoComponent } from './vistas/maria/contacto/contacto.component';
import { RestaurantComponent } from './vistas/maria/restaurant/restaurant.component';
import { TodosRestaurantComponent } from './vistas/maria/todos-restaurant/todos-restaurant.component';
import { HomeComponent } from './vistas/valero/home/home.component';
import { LoginComponent } from './vistas/valero/login/login.component';
import { SignupComponent } from './vistas/valero/signup/signup.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'signup', component:SignupComponent
  },
  {
    path:'contacto', component:ContactoComponent
  },
  {
    path:'restaurante', component:RestaurantComponent
  },
  {
    path:'todos-restaurantes', component:TodosRestaurantComponent
  },
  {
    path:'platillo', component:PlatilloComponent
  },
  {
    path:'registro-restaurante', component:RegistroRestaurantComponent
  },
  {
    path:'todos-platillos', component:TodosPlatillosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
