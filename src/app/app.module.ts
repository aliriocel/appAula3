import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunoDetalhesComponent } from './aluno-detalhes/aluno-detalhes.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AlunoService } from '../services/aluno.services';

@NgModule({
  declarations: [
    AppComponent,
    
    
    AlunosComponent,
    AlunoDetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([  
          {path: '', component: AlunosComponent},
          {path: 'alunos', component: AlunosComponent},
          {path: 'alunos/:id', component: AlunoDetalhesComponent}
    ])
  ],
  providers: [
    AlunoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
