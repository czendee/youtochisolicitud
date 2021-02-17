import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitudCreateComponent } from './solicitud-create/solicitud-create.component';
import { SolicitudEditComponent } from './solicitud-edit/solicitud-edit.component';
import { SolicitudesListComponent } from './solicitudes-list/solicitudes-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-solicitud' },
  { path: 'create-solicitud', component: SolicitudCreateComponent },
  { path: 'solicitudes-list', component: SolicitudesListComponent },
  { path: 'solicitud-edit/:id', component: SolicitudEditComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
