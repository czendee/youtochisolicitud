import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-empresa-create',
  templateUrl: './empresa-create.component.html',
  styleUrls: ['./empresa-create.component.css']
})
export class EmpresaCreateComponent implements OnInit {

  @Input() empresaDetails = { name: '', email: '', phone: 0 }

  constructor(
    public restApi: RestApiService, 
    public router: Router
  ) { }

  ngOnInit() { }

  addEmpresa(dataEmpresa) {
    this.restApi.createEmpresa(this.empresaDetails).subscribe((data: {}) => {
      this.router.navigate(['/empresa-list'])
    })
  }

}
