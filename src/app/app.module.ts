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
import { AlunoUpdateComponent } from './aluno-update/aluno-update.component';
import { AlunoNewComponent } from './aluno-new/aluno-new.component';

@NgModule({
  declarations: [
    AppComponent,
    
    
    AlunosComponent,
    AlunoDetalhesComponent,
    AlunoUpdateComponent,
    AlunoNewComponent
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
          {path: 'alunos/:id', component: AlunoDetalhesComponent},
          {path: 'aluno-update/:id', component: AlunoUpdateComponent},
          {path: 'aluno-new', component: AlunoNewComponent}
    ])
  ],
  providers: [
    AlunoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
