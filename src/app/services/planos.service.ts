import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import axios from 'axios';
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

  constructor() {}

  getPlanos(): Observable<Plano[]> {
    return from(axios.get(this.apiUrl)).pipe(
      map(response => response.data),
      map((posts: any[]) => posts.slice(0, 6).map((_: any, index: number) => ({
        nome: `Plano Dental ${index + 1}`,
        valor: this.valores[index],
        descricao: this.descricoes[index]
      }))),
      catchError(error => {
        console.error('Erro ao carregar planos:', error);
        return of([]);
      })
    );
  }
}
