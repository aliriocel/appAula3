import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from 'src/model/aluno';
import { AlunoService } from 'src/services/aluno.services';

@Component({
  selector: 'app-aluno-update',
  templateUrl: './aluno-update.component.html',
  styleUrls: ['./aluno-update.component.css']
})
export class AlunoUpdateComponent implements OnInit {

  formGroup : FormGroup;
  aluno : Aluno = new Aluno();
  msg : string = "";

  constructor(private route: ActivatedRoute,
    private router: Router,
    private alunoServ : AlunoService,
    private formBuilder : FormBuilder) {

      this.iniciarForm();

      //captura ID URL
      this.route.paramMap.subscribe(data=>{

        let id = data.get('id');// obtem ID
      
        this.alunoServ.buscaById(id).subscribe(data=>{
          this.aluno = data; // obtive cliente
        })
      }) 
     }

  ngOnInit(): void {
  }

  iniciarForm(){

    this.formGroup= this.formBuilder.group({
      nome : ['',[Validators.required,Validators.minLength(5),Validators.maxLength(120)]],
      matricula : ['',[Validators.required,Validators.minLength(5),Validators.maxLength(5)]],
      telefone : ['',[Validators.required,Validators.minLength(13),Validators.maxLength(13)]],
      email : ['',[Validators.required,Validators.email,Validators.minLength(5),Validators.maxLength(120)]],
      dataNascimento : ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]]
   })
  }

  atualizar(){
  this.alunoServ.update(this.aluno).subscribe(data=>{
    console.log(data);
    if(data.status===200){
      this.msg = 'Atualizado com sucesso!';
    }
  })
  }
}
