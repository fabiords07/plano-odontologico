import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Plano } from '../models/plano.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanosService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  private descricoes = [
    "Rol ANS, Prótese unitária em dentes anteriores e posteriores em cerômero, Procedimentos em ortodontia",
    "Plano Dental 1, Prótese removível (inclusive prótese total), prótese unitária em dentes anteriores e posteriores em cerômero.",
    "Plano Dental 2, Documentação ortodôntica completa*, manutenção mensal, clareamento com moldeira (gel + moldeira) e placa miorrelaxante.",
    "Plano Dental 3, Prótese fixa, inclusive em porcelana, e clareamento em consultório.",
    "Plano Dental 4, Cobertura ortodôntica com alinhador invisível com instalação, Prótese unitária em dentes anteriores e posteriores em cerômero.",
    "Plano Dental 5, Restauração, Extração, Clareamento em gel e moldeira (caseiro), Placa miorrelaxante, E muito mais."
  ];

  private valores = ['30,00', '80,00', '150,00', '200,00', '250,00', '300,00'];

  constructor(private http: HttpClient) {}

  getPlanos(): Observable<Plano[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(posts => posts.slice(0, 6).map((post, index) => ({
        nome: `Plano Dental ${index + 1}`,
        valor: this.valores[index],
        descricao: this.descricoes[index]
      })))
    );
  }
}
