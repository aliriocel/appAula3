import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoService } from 'src/services/aluno.services';
import { Aluno } from 'src/model/aluno';

@Component({
  selector: 'app-aluno-detalhes',
  templateUrl: './aluno-detalhes.component.html',
  styleUrls: ['./aluno-detalhes.component.css']
})
export class AlunoDetalhesComponent implements OnInit {

  dados: Aluno = new Aluno;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private alunoServ : AlunoService) {
      
      this.route.paramMap.subscribe(data=>{
        let id = data.get('id');

        this.alunoServ.buscaById(id).subscribe(data=>{
          this.dados = data;
        })

      })
     }

  ngOnInit(): void {
  }

}
