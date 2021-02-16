import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';

// Routing module for router service
import { AppRoutingModule } from './app-routing.module';

// Forms module
import { FormsModule } from '@angular/forms';

// Components
import { ServicioCreateComponent } from './servicio-create/servicio-create.component';
import { ServicioEditComponent } from './servicio-edit/servicio-edit.component';
import { ServiciosListComponent } from './servicios-list/servicios-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicioCreateComponent,
    ServicioEditComponent,
    ServiciosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
