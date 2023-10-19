import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listarprodutos',
  templateUrl: './listarprodutos.component.html',
  styleUrls: ['./listarprodutos.component.css']
})
export class ListarprodutosComponent implements OnInit {

  listaStrings: string[] = ['Primeiro', 'Segundo', 'Terceiro'];
  listaNumeros: number[] = [15, 15.18, 100];

  objetoModelo = {
    nome: 'Fatima',
    idade: 18,
    altura: 1.56,
    graduado: true
  };

  listaProdutos: any[] = [
    {nome: 'Curso de Angular',
    precoProduto: 35.56,
    validade: '2023-12-31',
    id: 1},

    {nome: 'Curso de Ionic',
    precoProduto: 50,
    validade: '2023-10-05',
    id: 2},

    {id: 3,
      nome: "Curso de Ionic Avançado",
      precoProduto: 50,
      validade: '2024-12-31'},
  ];

 constructor() {
    for (let item of this.listaStrings) {
      console.log(item);
    }
    for (let item of this.listaNumeros) {
      console.log(item);
    }
    console.log(this.objetoModelo);
    console.log(this.objetoModelo.nome);
  }

  ngOnInit(): void {
  }

}
