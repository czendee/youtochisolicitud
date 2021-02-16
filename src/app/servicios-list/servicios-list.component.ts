import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-servicios-list',
  templateUrl: './servicios-list.component.html',
  styleUrls: ['./servicios-list.component.css']
})
export class ServiciosListComponent implements OnInit {

  Servicio: any = [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.loadServicios()
  }

  // Get servicios list
  loadServicios() {
    return this.restApi.getServicios().subscribe((data: {}) => {
      this.Servicio = data;
    })
  }

  // Delete servicio
  deleteServicio(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.restApi.deleteServicio(id).subscribe(data => {
        this.loadServicios()
      })
    }
  }  

}
