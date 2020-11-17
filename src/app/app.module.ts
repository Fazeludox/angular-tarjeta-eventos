import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventoShowComponent } from './evento-show/evento-show.component';
import { EventFilterPipe } from './pipes/event-filter.pipe';
import { FormsModule } from '@angular/forms';
import { EventoItemComponent } from './evento-item/evento-item.component';
import { EventoAddComponent } from './evento-add/evento-add.component';
import { EventosService } from './services/eventos.service';

@NgModule({
  declarations: [
    AppComponent,
    EventoShowComponent,
    EventFilterPipe,
    EventoItemComponent,
    EventoAddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EventosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
