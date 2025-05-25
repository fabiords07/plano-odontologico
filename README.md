# Plano Odontologico

## Sobre o Projeto

Este projeto foi desenvolvido como teste técnico para criar uma aplicação web responsiva usando Angular.

## Tecnologias Utilizadas

- **Angular** 19.2.12
- **Angular CLI** 19.2.12
- **TypeScript**
- **HTML5/CSS3**
- **RxJS**

## Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

- Node.js (versão 18.x ou superior)
- npm ou yarn
- Angular CLI

```bash
# Instalar Angular CLI globalmente
npm install -g @angular/cli
```

## Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/fabiords07/plano-odontologico.git
cd plano-odontologico
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o projeto em modo de desenvolvimento**
```bash
ng serve
```

4. **Acesse a aplicação**
Abra seu navegador e navegue para `http://localhost:4200/`


## Integração com JSONPlaceholder

Este projeto utiliza o JSONPlaceholder como API externa para demonstrar a funcionalidade de consumo de dados reais na seção de planos odontológicos. No projeto, foi implementada da seguinte forma: O serviço PlanosService (planos.service.ts) foi criado para consumir dados da API JSONPlaceholder, e na seção de planos, o serviço é consumido para popular os cards.

## Etapas do projeto:
1. Implementação do header: Feito
2. Implementação do hero: Feito
3. Implementação da seção de planos: Feito
4. Integração da API usando Fetch/Axios: Feito, com Axios
5. Implementação da seção de contato: Feito
6. Implementação do footer: Feito 
7. Responsividade para diferentes tipos de tela: Feito
8. Uso de pré processadores CSS: Não feito
9. Implementação de testes: Não feito
