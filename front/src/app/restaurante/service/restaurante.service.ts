import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurante } from '../class/restaurante';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RestauranteService {

    rota: string;
    urlApi = environment.apiUrl;

    constructor(private http: HttpClient) { }

    getRestaurantes(): Observable<Restaurante[]> {
        this.rota = `${this.urlApi}restaurante`;
        return this.http.get<Restaurante[]>(this.rota);
    }

    getRestaurante(id: number): Observable<Restaurante> {
        this.rota = `${this.urlApi}restaurante/${id}`;
        return this.http.get<Restaurante>(this.rota);
    }

    addRestaurante(restaurante: Restaurante) {
        this.rota = `${this.urlApi}restaurante`;
        return this.http.post(this.rota, restaurante, httpOptions);
    }

    editRestaurante(restaurante: Restaurante) {
        this.rota = `${this.urlApi}restaurante/${restaurante.id}`;
        return this.http.put<Restaurante>(this.rota, restaurante, httpOptions);
    }

    delRestaurante(id: number): Observable<number> {
        this.rota = `${this.urlApi}restaurante/${id}`;
        return this.http.delete<number>(this.rota, httpOptions);
    }
}
