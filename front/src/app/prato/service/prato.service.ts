import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prato } from '../class/prato';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PratoService {

    rota: string;
    urlApi = environment.apiUrl;

    constructor(private http: HttpClient) { }

    getPratos(): Observable<Prato[]> {
        this.rota = `${this.urlApi}prato`;
        return this.http.get<Prato[]>(this.rota);
    }

    getPrato(id: number): Observable<Prato> {
        this.rota = `${this.urlApi}prato/${id}`;
        return this.http.get<Prato>(this.rota);
    }

    addPrato(prato: Prato) {
        this.rota = `${this.urlApi}prato`;
        return this.http.post(this.rota, prato, httpOptions);
    }

    editPrato(prato: Prato) {
        this.rota = `${this.urlApi}prato/${prato.id}`;
        return this.http.put<Prato>(this.rota, prato, httpOptions);
    }

    delPrato(id: number): Observable<number> {
        this.rota = `${this.urlApi}prato/${id}`;
        return this.http.delete<number>(this.rota, httpOptions);
    }
}
