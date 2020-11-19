import { Route } from '@angular/router';
import { EventoAddComponent } from './evento-add/evento-add.component';
import { EventoDetailComponent } from './evento-detail/evento-detail.component';
import { EventoShowComponent } from './evento-show/evento-show.component';

export const APP_ROUTES: Route[] = [
  {path: 'events', component:EventoShowComponent},
  {path: 'events/add', component:EventoAddComponent},
  {path: 'events/:id', component:EventoDetailComponent},
  {path: '', redirectTo:'/events', pathMatch:'full'},
  {path: '**', redirectTo:'/events', pathMatch:'full'}
]
