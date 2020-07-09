import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/model/aluno';
import { AlunoService } from 'src/services/aluno.services';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  lista : Aluno[] = [];

  constructor(private alunoServ: AlunoService) { }

  ngOnInit(): void {
    this.alunoServ.getLista().subscribe(data =>{
     // console.log(data);
      this.lista = data;
    })
  }

}
