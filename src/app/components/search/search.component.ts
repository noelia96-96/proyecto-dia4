import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PeliculaService } from '../../services/pelicula.service';
import { Peliculas, datos } from '../../interfaces/peliculas';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

//private route: ActivatedRoute, 

name: string;
datosPeliculas: datos[];
pelicula:Peliculas;
cargar = true;


constructor(private peliculaService: PeliculaService) { }

  ngOnInit(): void {
  }

  async searchFilm(){
   this.pelicula = await this.peliculaService.resultadoPeliculas(this.name);
   this.datosPeliculas = this.pelicula.Search;
   console.log(this.pelicula);
   this.cargar= false;

  }

}
