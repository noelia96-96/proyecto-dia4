import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { InformacionComponent } from './components/informacion/informacion.component';
import { TituloPeliculaComponent } from './components/titulo-pelicula/titulo-pelicula.component';
import {CardModule} from 'primeng/card';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    InformacionComponent,
    TituloPeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    CalendarModule
    
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
