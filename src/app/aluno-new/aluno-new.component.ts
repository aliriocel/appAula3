import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlunoService } from 'src/services/aluno.services';

@Component({
  selector: 'app-aluno-new',
  templateUrl: './aluno-new.component.html',
  styleUrls: ['./aluno-new.component.css']
})
export class AlunoNewComponent implements OnInit {

formGroup : FormGroup;
msg : string = null;

  constructor(
    private alunoServ : AlunoService,
    private formBuilder : FormBuilder
  ) {
    this.iniciarForm();
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

  cadastrar(){
    this.alunoServ.new(this.formGroup.value).subscribe(data=>{
      console.log(data);
      if(data.status===201){
        this.msg = 'Cadastrado com sucesso!';
        this.formGroup.reset();
      }
    })
    }
  

}
