import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-solicitud-details',
  templateUrl: './solicitud-edit.component.html',
  styleUrls: ['./solicitud-edit.component.css']
})

export class SolicitudEditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  solicitudData: any = {};

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { 
  }

  ngOnInit() { 
    this.restApi.getSolicitud(this.id).subscribe((data: {}) => {
      this.solicitudData = data;
    })
  }

  // Updates solicitud data
  updateSolicitud() {
    if(window.confirm('Confirmar la modificacion de los datos?')){
      this.restApi.updateSolicitud(this.id, this.solicitudData).subscribe(data => {
        this.router.navigate(['/solicitudes-list'])
      })
    }
  }

}
