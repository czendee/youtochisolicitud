import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-empresa-details',
  templateUrl: './empresa-edit.component.html',
  styleUrls: ['./empresa-edit.component.css']
})

export class EmpresaEditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  empresaData: any = {};

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { 
  }

  ngOnInit() { 
    this.restApi.getEmpresa(this.id).subscribe((data: {}) => {
      this.empresaData = data;
    })
  }

  // Update empresa data
  updateEmpresa() {
    if(window.confirm('Confirmar la modificacion de los datos?')){
      this.restApi.updateEmpresa(this.id, this.empresaData).subscribe(data => {
        this.router.navigate(['/empresas-list'])
      })
    }
  }

}
