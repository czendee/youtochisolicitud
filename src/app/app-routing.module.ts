import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicioCreateComponent } from './servicio-create/servicio-create.component';
import { ServicioEditComponent } from './servicio-edit/servicio-edit.component';
import { ServiciosListComponent } from './servicios-list/servicios-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-servicio' },
  { path: 'create-servicio', component: ServicioCreateComponent },
  { path: 'servicios-list', component: ServiciosListComponent },
  { path: 'servicio-edit/:id', component: ServicioEditComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
