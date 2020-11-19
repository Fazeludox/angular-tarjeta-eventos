import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {  catchError, map } from 'rxjs/operators';
import { IEventos } from '../interfaces/i-eventos';
import { EventoResponse, Respuesta } from '../interfaces/respuesta';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private eventURL: string = 'eventos';

  constructor(private http: HttpClient) { }

  getEventos = ():Observable<IEventos[]>=>{

    return this.http.get<Respuesta>(this.eventURL).pipe(
      map(res=>res.eventos));
    }

  addInsert = (evento: IEventos):Observable<EventoResponse> => {

    return this.http.post<EventoResponse>(this.eventURL, evento).pipe(
      map(res => res),
      catchError((res:HttpErrorResponse)=> throwError(`Èrror Insertado en el evento. Codigo del servidor: ${res.status} y codigo del evento ${res.message}`))
    );

  }

  getEvento = (id:number):Observable<EventoResponse> => {
    return this.http.get<EventoResponse>(this.eventURL+"/"+id).pipe(
      map(res => res),
      catchError((res:HttpErrorResponse)=> throwError(`Èrror Insertado en el evento. Codigo del servidor: ${res.status} y codigo del evento ${res.message}`))
    );;
  }

  deleteEvent = (id: number):Observable<EventoResponse> => {

    return this.http.delete<EventoResponse>(this.eventURL+"/"+id);

  }
}
