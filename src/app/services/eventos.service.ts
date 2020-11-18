import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  map } from 'rxjs/operators';
import { IEventos } from '../interfaces/i-eventos';
import { EventoResponse, Respuesta } from '../interfaces/respuesta';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private eventURL: string = 'http://curso.i234.me:8080/eventos';

  constructor(private http: HttpClient) { }

  getEventos = ():Observable<IEventos[]>=>{

    return this.http.get<Respuesta>(this.eventURL).pipe(
      map(res=>res.eventos));
    }

  addInsert = (evento: IEventos):Observable<EventoResponse> => {

    return this.http.post<EventoResponse>(this.eventURL, evento);

  }

  deleteEvent = (id: number):Observable<EventoResponse> => {

    return this.http.delete<EventoResponse>(this.eventURL+"/"+id);

  }
}
