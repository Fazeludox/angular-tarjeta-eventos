import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { map } from 'rxjs/operators';
import { IEventos } from '../interfaces/i-eventos';
import { EventosService } from '../services/eventos.service';

@Component({
  selector: 'evento-add',
  templateUrl: './evento-add.component.html',
  styleUrls: ['./evento-add.component.css']
})
export class EventoAddComponent implements OnInit {

  newEvento: IEventos = {
    id: 0,
    title: '',
    description: '',
    image: '',
    price: 0,
    date: ''
  }

  @Output() addEvento = new EventEmitter<IEventos>()

  constructor(private eventoServicio:EventosService) { }

  ngOnInit(): void {
  }

  enviarEvento = () => {

    this.eventoServicio.addInsert(this.newEvento).subscribe(
      ev=>{
        this.addEvento.emit(ev.evento);
        this.newEvento = {
          id:0,
          title: '',
          description: '',
          image: '',
          price: 0,
          date: ''
        }
      }
    )


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
