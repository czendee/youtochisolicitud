import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-solicitudes-list',
  templateUrl: './solicitudes-list.component.html',
  styleUrls: ['./solicitudes-list.component.css']
})
export class SolicitudesListComponent implements OnInit {

  Solicitud: any = [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.loadSolicitudes()
  }

  // Get solicitudes list
  loadSolicitudes() {
    return this.restApi.getSolicitudes().subscribe((data: {}) => {
      this.Solicitud = data;
    })
  }

  // Delete solicitud
  deleteSolicitud(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.restApi.deleteSolicitud(id).subscribe(data => {
        this.loadSolicitudes()
      })
    }
  }  

}
