import { IEventos } from './i-eventos';

export interface Respuesta {
  eventos: IEventos[];
}

export interface EventoResponse{
  evento: IEventos;
  ok: boolean;
  error?:string;
  errors?:string[];
}

