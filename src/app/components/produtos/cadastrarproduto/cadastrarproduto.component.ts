import { ProdutosService } from './../../../service/produtos.service';
import { Component, OnInit } from '@angular/core';
import { IProduto } from './../../../model/Iproduto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrarproduto',
  templateUrl: './cadastrarproduto.component.html',
  styleUrls: ['./cadastrarproduto.component.css']
})
export class CadastrarprodutoComponent implements OnInit {
    produto: IProduto = {
    nome:'',
    validade: new Date(),
    preco: 0
  };

  constructor(private ProdutosService: ProdutosService, private router: Router) { }

  ngOnInit(): void {}

  salvarProduto(): void {
    this.ProdutosService.cadastrar(this.produto).subscribe(retorno => {
      this.produto = retorno;
      this.ProdutosService.exibirMensagem(
        'Sistema',
        '$(this.produto.nome} foi cadastrado com sucesso. ID: $(this.produto.id}',
        'toast-success'
      );
          this.router.navigate(['/produtos']);
    });

  }



  private newMethod() {
    return this.produto;
  }
}
