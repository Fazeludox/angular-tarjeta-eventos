import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IEventos } from '../interfaces/i-eventos';

@Component({
  selector: 'evento-add',
  templateUrl: './evento-add.component.html',
  styleUrls: ['./evento-add.component.css']
})
export class EventoAddComponent implements OnInit {

  newEvento: IEventos = {
    title: '',
    description: '',
    image: '',
    price: 0,
    date: ''
  }

  @Output() addEvento = new EventEmitter<IEventos>()

  constructor() { }

  ngOnInit(): void {
  }

  enviarEvento = () => {

    this.addEvento.emit(this.newEvento)

    this.newEvento = {
      title: '',
      description: '',
      image: '',
      price: 0,
      date: ''
    }
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) { return; }

    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', e => {
      this.newEvento.image = reader.result as string;
    });
  }

}
