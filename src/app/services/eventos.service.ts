import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventosService {


  constructor() { }

  getEventos = ()=>{
    return [{
      title: "Presentacion Angular",
      image: "assets/angular.png",
      date: '2020-10-15',
      desc: "Evento hablando de angular y su impacto.",
      price: 15,
    }, {
      title: "JQuery esta muerto",
      image: "assets/jquerydead.png",
      date: '2020-05-02',
      desc: "La aparicion de ES6 esta matando a Jquery",
      price: 25,
    }]
  }
}
