import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-titulo-pelicula',
  templateUrl: './titulo-pelicula.component.html',
  styleUrls: ['./titulo-pelicula.component.css']
})
export class TituloPeliculaComponent implements OnInit {

  @Input() mostrarTitulo:any;



  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  /* mostrar(){
    this.route.navigate(['/infoPelicula',this.mostrarTitulo.Title, this.mostrarTitulo.Poster,this.mostrarTitulo.Year, this.mostrarTitulo.Type])

  } */

}
