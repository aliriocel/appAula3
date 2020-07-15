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
import { Interceptor } from 'src/services/interceptors/interceptors.module';
import { LoginComponent } from './login/login.component';
import { AuthService } from 'src/services/auth.service';
import {AuthGuardService} from 'src/services/auth-guard.service';
import { LogoffComponent } from './logoff/logoff.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,    
    AlunosComponent,
    AlunoDetalhesComponent,
    AlunoUpdateComponent,
    AlunoNewComponent,
    LoginComponent,
    LogoffComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Interceptor,
    RouterModule.forRoot([  
          
    ])
  ],
  providers: [
    AlunoService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
