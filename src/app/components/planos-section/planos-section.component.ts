import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlanosService } from '../../services/planos.service';
import { Plano } from '../../models/plano.interface';

@Component({
  selector: 'app-planos-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './planos-section.component.html',
  styleUrls: ['./planos-section.component.css']
})
export class PlanosSectionComponent implements OnInit {
  planos: Plano[] = [];
  planosFiltrados: Plano[] = [];
  termoBusca: string = '';
  filtroPreco: string = '';
  loading: boolean = true;
  erro: string = '';

  constructor(private planosService: PlanosService) {}

  ngOnInit(): void {
    this.carregarPlanos();
  }

  carregarPlanos(): void {
    this.loading = true;
    this.planosService.getPlanos().subscribe({
      next: (dados) => {
        this.planos = dados;
        this.planosFiltrados = dados;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erro ao carregar planos:', error);
        this.erro = 'Erro ao carregar os planos. Tente novamente.';
        this.loading = false;
      }
    });
  }

  filtrarPlanos(): void {
    let resultado = [...this.planos];

    // Filtro por termo de busca
    if (this.termoBusca.trim()) {
      const termo = this.termoBusca.toLowerCase().trim();
      resultado = resultado.filter(plano =>
        plano.nome.toLowerCase().includes(termo) ||
        plano.descricao.toLowerCase().includes(termo)
      );
    }

    // Ordenação por preço
    if (this.filtroPreco === 'maior') {
      resultado.sort((a, b) => this.getValorNumerico(b.valor) - this.getValorNumerico(a.valor));
    } else if (this.filtroPreco === 'menor') {
      resultado.sort((a, b) => this.getValorNumerico(a.valor) - this.getValorNumerico(b.valor));
    }

    this.planosFiltrados = resultado;
  }

  private getValorNumerico(valor: string): number {
    return parseFloat(valor.replace(',', '.'));
  }

  onBuscaChange(): void {
    this.filtrarPlanos();
  }

  onFiltroChange(): void {
    this.filtrarPlanos();
  }

  limparFiltros(): void {
    this.termoBusca = '';
    this.filtroPreco = '';
    this.planosFiltrados = [...this.planos];
  }

  trackByNome(index: number, plano: Plano): string {
    return plano.nome;
  }

  getPrecoInteiro(valor: string): string {
    return valor.split(',')[0];
  }

  getPrecoCentavos(valor: string): string {
    return valor.split(',')[1] || '00';
  }
}
