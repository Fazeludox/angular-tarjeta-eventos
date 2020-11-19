import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEventos } from '../interfaces/i-eventos';
import { EventosService } from '../services/eventos.service';

@Component({
  selector: 'evento-detail',
  templateUrl: './evento-detail.component.html',
  styleUrls: ['./evento-detail.component.css']
})
export class EventoDetailComponent implements OnInit {
  public ev: IEventos = {
    id: 0,
    title: "",
    description: "",
    date: "",
    price: 0,
    image: ""
  };

  constructor(private route: ActivatedRoute, private eventoService: EventosService, private router: Router) { }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.params['id']);
    console.log("El id es: " + id);
    this.eventoService.getEvento(id).subscribe(e => this.ev = e.evento,
      error => console.error("Este es el error:" + error))
  }

  goBack() {
    this.router.navigate(['/events']);
  }

}
