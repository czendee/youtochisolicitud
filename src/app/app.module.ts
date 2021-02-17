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
import { SolicitudCreateComponent } from './solicitud-create/solicitud-create.component';
import { SolicitudEditComponent } from './solicitud-edit/solicitud-edit.component';
import { SolicitudesListComponent } from './solicitudes-list/solicitudes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SolicitudCreateComponent,
    SolicitudEditComponent,
    SolicitudesListComponent
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
