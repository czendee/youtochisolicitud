import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Empresa } from '../shared/empresa';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  
  // Define API
  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  // HttpClient API get() method => Fetch empresas list
  getEmpresa(): Observable<Empresa> {
    return this.http.get<Empresa>(this.apiURL + '/empresas')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch empresa
  getEmpresa(id): Observable<Empresa> {
    return this.http.get<Empresa>(this.apiURL + '/empresas/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API post() method => Create empresa
  createEmpresa(empresa): Observable<Empresa> {
    return this.http.post<Empresa>(this.apiURL + '/empresas', JSON.stringify(empresa), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API put() method => Update empresa
  updateEmpresa(id, empresa): Observable<Empresa> {
    return this.http.put<Empresa>(this.apiURL + '/empresa/' + id, JSON.stringify(empresa), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete empresa
  deleteEmpresa(id){
    return this.http.delete<Empresa>(this.apiURL + '/empresas/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling 
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}
