import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { IEventos } from '../interfaces/i-eventos';
import { EventosService } from '../services/eventos.service';

@Component({
  selector: 'evento-show',
  templateUrl: './evento-show.component.html',
  styleUrls: ['./evento-show.component.css']
})
export class EventoShowComponent implements OnInit {

  public Evento: IEventos[] = [{
    id: 1,
    title: "",
    description: "",
    date: "",
    price: 0,
    image: ""
  }];

  public filterSearch: string = '';

  public alturaImage: object = {
    'width.%': 100,
    'height.px': 200,
    'padding.px': 5,
    'border-bottom': '2px dotted crimson'
  }

  constructor(private eventoService:EventosService) {}

  ngOnInit(): void {
    this.eventoService.getEventos()
    .subscribe(
      (result) => this.Evento = result,
      (err) => console.error(err),
      () => console.log(this.Evento)
    );
  }

  //Metodos

  orderDate = (ev:Event) => {
    ev.preventDefault();
    this.filterSearch = '';

    this.Evento.sort((a, b) => {

      let f1: Date = new Date(a.date);
      let f2: Date = new Date(b.date);

      if (f1 > f2) {
        return 1;
      } else {
        if (f1 < f2) {
          return -1
        } else
          return 0;
      }
    })
  }

  orderPrice = (ev:Event) => {
    ev.preventDefault();


    this.filterSearch = '';

    this.Evento.sort((a, b) => {
      return b.price - a.price;
    })

  }

  //Metodos de los nuevos eventos
  deleteEventos = (ev: IEventos) => {
    this.Evento = this.Evento.filter(event => ev !== event);
  }




}
