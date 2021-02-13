import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-empresas-list',
  templateUrl: './empresas-list.component.html',
  styleUrls: ['./empresas-list.component.css']
})
export class EmpresasListComponent implements OnInit {

  Empresa: any = [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.loadEmpresas()
  }

  // Get empresas list
  loadEmpresas() {
    return this.restApi.getEmpresas().subscribe((data: {}) => {
      this.Empresa = data;
    })
  }

  // Delete empresa
  deleteEmpresa(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.restApi.deleteEmpresa(id).subscribe(data => {
        this.loadEmpresas()
      })
    }
  }  

}
