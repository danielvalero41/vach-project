import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { HomeComponent } from './vistas/valero/home/home.component';
import { LoginComponent } from './vistas/valero/login/login.component';
import { SignupComponent } from './vistas/valero/signup/signup.component';
import { TodosRestaurantComponent } from './vistas/maria/todos-restaurant/todos-restaurant.component';
import { RestaurantComponent } from './vistas/maria/restaurant/restaurant.component';
import { ContactoComponent } from './vistas/maria/contacto/contacto.component';
import { TodosPlatillosComponent } from './vistas/kleinman/todos-platillos/todos-platillos.component';
import { PlatilloComponent } from './vistas/kleinman/platillo/platillo.component';
import { RegistroRestaurantComponent } from './vistas/kleinman/registro-restaurant/registro-restaurant.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TuCuentaComponent } from './vistas/jesus/tu-cuenta/tu-cuenta.component';
import { TuCuentaRestaurantComponent } from './vistas/jesus/tu-cuenta-restaurant/tu-cuenta-restaurant.component';
import { ContrasenaComponent } from './vistas/jesus/contrasena/contrasena.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    TodosRestaurantComponent,
    RestaurantComponent,
    ContactoComponent,
    TodosPlatillosComponent,
    PlatilloComponent,
    RegistroRestaurantComponent,
    TuCuentaComponent,
    TuCuentaRestaurantComponent,
    ContrasenaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
