import { Pipe, PipeTransform } from '@angular/core';
import { IEventos } from '../interfaces/i-eventos';

@Pipe({
  name: 'eventFilter'
})
export class EventFilterPipe implements PipeTransform {

  transform(eventos: IEventos[], filterBy: string): IEventos[] {
    const filter = filterBy ? filterBy.toLocaleLowerCase():null;

   return filter ? eventos.filter(item => item.title.toLocaleLowerCase().includes(filter)):eventos;


  }

}
