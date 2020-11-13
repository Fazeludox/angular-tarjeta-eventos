import { Component, OnInit } from '@angular/core';
import { IEventos } from '../interfaces/i-eventos';

@Component({
  selector: 'evento-show',
  templateUrl: './evento-show.component.html',
  styleUrls: ['./evento-show.component.css']
})
export class EventoShowComponent implements OnInit {

  public Evento: IEventos[]=[{
    title:"Presentacion Angular",
    image:"Ninguna",
    date:'2020-10-15',
    desc:"Evento hablando de angular y su impacto.",
    price:15,
  },{
    title:"JQuery esta muerto",
    image:"Ninguna",
    date:'2020-05-02',
    desc:"La aparicion de ES6 esta matando a Jquery",
    price:25,
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
