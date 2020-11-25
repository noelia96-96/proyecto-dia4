import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TituloPeliculaComponent } from './components/titulo-pelicula/titulo-pelicula.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {
    path: 'infoPelicula/:title/:id',
    component: InformacionComponent
  },

  {
    path: 'search',
    component: SearchComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
