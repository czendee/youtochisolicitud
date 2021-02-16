import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servicio-details',
  templateUrl: './servicio-edit.component.html',
  styleUrls: ['./servicio-edit.component.css']
})

export class ServicioEditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  servicioData: any = {};

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { 
  }

  ngOnInit() { 
    this.restApi.getServicio(this.id).subscribe((data: {}) => {
      this.servicioData = data;
    })
  }

  // Updates servicio data
  updateServicio() {
    if(window.confirm('Confirmar la modificacion de los datos?')){
      this.restApi.updateServicio(this.id, this.servicioData).subscribe(data => {
        this.router.navigate(['/servicios-list'])
      })
    }
  }

}
