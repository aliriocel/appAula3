import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunoUpdateComponent } from './aluno-update/aluno-update.component';
import { AlunoDetalhesComponent } from './aluno-detalhes/aluno-detalhes.component';
import { AuthGuardService } from 'src/services/auth-guard.service';
import { LogoffComponent } from './logoff/logoff.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'alunos', component: AlunosComponent, canActivate: [AuthGuardService] },
  { path: 'alunos/:id', component: AlunoDetalhesComponent, canActivate: [AuthGuardService] },
  { path: 'aluno-update/:id', component: AlunoUpdateComponent, canActivate: [AuthGuardService] },
  { path: 'aluno-new', component: AlunosComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'logoff', component: LogoffComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
