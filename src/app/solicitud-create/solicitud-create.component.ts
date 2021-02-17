import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-solicitud-create',
  templateUrl: './solicitud-create.component.html',
  styleUrls: ['./solicitud-create.component.css']
})
export class SolicitudCreateComponent implements OnInit {

  @Input() solicitudDetails = { name: '', email: '', phone: 0 }

  constructor(
    public restApi: RestApiService, 
    public router: Router
  ) { }

  ngOnInit() { }

  addSolicitud(dataSolicitud) {
    this.restApi.createSolicitud(this.solicitudDetails).subscribe((data: {}) => {
      this.router.navigate(['/solicitudes-list'])
    })
  }

}
