import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaCreateComponent } from './empresa-create/empresa-create.component';
import { EmpresaEditComponent } from './empresa-edit/empresa-edit.component';
import { EmpresasListComponent } from './empresas-list/empresas-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-empresa' },
  { path: 'create-empresa', component: EmpresaCreateComponent },
  { path: 'empresas-list', component: EmpresasListComponent },
  { path: 'empresa-edit/:id', component: EmpresaEditComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
