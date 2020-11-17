import { Component, OnInit } from '@angular/core';
import { IEventos } from '../interfaces/i-eventos';

@Component({
  selector: 'evento-show',
  templateUrl: './evento-show.component.html',
  styleUrls: ['./evento-show.component.css']
})
export class EventoShowComponent implements OnInit {


  public filterSearch: string = '';

  newEvento: IEventos = {
    title:'',
    desc: '',
    image:'',
    price:0,
    date:''
  }

  public Evento: IEventos[] = [{
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

  public alturaImage: object = {
    'width.%': 100,
    'height.px': 200,
    'padding.px': 5,
    'border-bottom': '2px dotted crimson'
  }



  constructor() { }

  ngOnInit(): void {
  }

  orderDate = () => {
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

  orderPrice = () => {

    this.filterSearch = '';

    this.Evento.sort((a, b) => {
      return b.price - a.price;
    })

  }

  addEvento = () => {
    this.Evento.push(this.newEvento);

    console.log(this.newEvento);

    this.newEvento = {
      title:'',
      desc: '',
      image:'',
      price:0,
      date:''
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
