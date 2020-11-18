import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEventos } from '../interfaces/i-eventos';
import { EventosService } from '../services/eventos.service';

@Component({
  selector: 'evento-item',
  templateUrl: './evento-item.component.html',
  styleUrls: ['./evento-item.component.css']
})
export class EventoItemComponent implements OnInit {

  @Input() elemEvento: IEventos = {
    id: 0,
    title: "",
    description: "",
    date: "",
    price: 0,
    image: ""
  }

  @Output() eventSelect = new EventEmitter<void>();

  constructor(private eventoService: EventosService) { }

  ngOnInit(): void {
  }

  delEvento() {

    this.eventoService.deleteEvent(this.elemEvento.id).subscribe(
      () => {
        this.eventSelect.emit();
      }
    )
  }


  public alturaImage: object = {
    'width.%': 100,
    'height.px': 200,
    'padding.px': 5,
    'border-bottom': '2px dotted crimson'
  }
}
