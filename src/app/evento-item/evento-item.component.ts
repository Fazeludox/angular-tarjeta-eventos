import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEventos } from '../interfaces/i-eventos';

@Component({
  selector: 'evento-item',
  templateUrl: './evento-item.component.html',
  styleUrls: ['./evento-item.component.css']
})
export class EventoItemComponent implements OnInit {

  @Input() elemEvento: IEventos = {
    title: '',
    desc: '',
    image: '',
    price: 0,
    date: ''
  };

  @Output() eventSelect = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  delEvento(){
    this.eventSelect.emit();
  }


  public alturaImage: object = {
    'width.%': 100,
    'height.px': 200,
    'padding.px': 5,
    'border-bottom': '2px dotted crimson'
  }
}
