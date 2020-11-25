import { Title } from '@angular/platform-browser';

export interface Peliculas {
    Search: datos[];

    
}

export interface datos{
    Title: string;
    Year: number;
    imdbID: string;
    Type: string;
    Poster: string;
   

}

export interface DetallesPeliculas{
    Title: string;
    Year: string;
    Rated: string;
    Released: Date;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Languaje: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: rating[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: boolean;
}

export interface rating{
    Source: string;
    Value: string;
}


