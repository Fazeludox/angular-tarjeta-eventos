import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IEventos } from '../interfaces/i-eventos';
import { ResponseEventos } from '../interfaces/respuesta';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private eventURL: string = 'http://curso.i234.me:8080/eventos';

  constructor(private http: HttpClient) { }

  getEventos(): Observable <IEventos[]>{
    return this.http.get<ResponseEventos>(this.eventURL).pipe(
      map(res=>res.EventosRespuesta),
      catchError((resp: HttpErrorResponse) => throwError( `Error obteniendo productos. Código de servidor: ${resp.status}. Mensaje:${resp.message}`))
    );
  }

  /*useFet = async () => {

    //let a = await fetch("http://curso.i234.me:8080/eventos");

    let a = fetch(this.URL);

    console.log(a);

    (await a).json().then(responseText => {
      let uJSON:Array<object> = responseText;
      return uJSON;

    }).catch(err => console.log(err))
  }*/
}
