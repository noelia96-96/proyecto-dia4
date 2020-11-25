import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Peliculas, DetallesPeliculas } from '../interfaces/peliculas';


@Injectable({
  providedIn: 'root' 
})
export class PeliculaService {

  constructor(private http:HttpClient) { }

  resultadoPeliculas(name:string){
    console.log(name);
    return new Promise<Peliculas>(resolve=>{
      this.http.get<Peliculas>(`${environment.apiUrl}?s=${name}&apikey=${environment.apiKey}`).subscribe(resp=>{
      resolve(resp);

      
    });
  });
};

resultadoDetallesPeliculas(id:string){
  console.log(id);
  return new Promise<DetallesPeliculas>(resolve=>{
    this.http.get<DetallesPeliculas>(`${environment.apiUrl}?i=${id}&apikey=${environment.apiKey}`).subscribe(resp=>{
    resolve(resp);

    
  });
});
}
}
