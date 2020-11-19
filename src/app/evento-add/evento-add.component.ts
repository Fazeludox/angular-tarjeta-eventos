import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private eventoServicio:EventosService, private router:Router) { }

  ngOnInit(): void {
  }

  enviarEvento = async () => {

    this.eventoServicio.addInsert(this.newEvento).subscribe(
      () => {
this.router.navigate(['/events'])
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
