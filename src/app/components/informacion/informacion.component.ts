import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculaService } from '../../services/pelicula.service';
import { DetallesPeliculas } from '../../interfaces/peliculas';


@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

cargar = false;
title:string;
id: string;
detalles: DetallesPeliculas;

  constructor(private route: ActivatedRoute, private peliculaservice: PeliculaService) { }

  async ngOnInit() {
    this.title = this.route.snapshot.paramMap.get('title');
    this.id = this.route.snapshot.paramMap.get('id');
    this.detalles = await this.peliculaservice.resultadoDetallesPeliculas(this.id);
    
    console.log(this.detalles);
    this.cargar = true;
    
 
  }


}
