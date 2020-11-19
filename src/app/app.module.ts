import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventoShowComponent } from './evento-show/evento-show.component';
import { EventFilterPipe } from './pipes/event-filter.pipe';
import { FormsModule } from '@angular/forms';
import { EventoItemComponent } from './evento-item/evento-item.component';
import { EventoAddComponent } from './evento-add/evento-add.component';
import { EventosService } from './services/eventos.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from'@angular/common/http';
import { BaseUrlInterceptor } from './interceptos/base-url.interceptor';
import { RouterModule } from '@angular/router';
import { EventoDetailComponent } from './evento-detail/evento-detail.component';
import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    EventoShowComponent,
    EventFilterPipe,
    EventoItemComponent,
    EventoAddComponent,
    EventoDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [EventosService,{
    provide:HTTP_INTERCEPTORS,
    useClass: BaseUrlInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
