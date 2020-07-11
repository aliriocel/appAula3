import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Aluno} from '../model/aluno'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn:'root',
})

export class AlunoService{
    constructor(private http:HttpClient){}

    getLista() : Observable<Aluno[]>{

        return this.http.get<Aluno[]>(`${environment.API}/alunos`);
    }

    buscaById(id : string) : Observable<Aluno>{

        return this.http.get<Aluno>(`${environment.API}/alunos/${id}`);
    }

    update(obj : Aluno){

        return this.http.put<Aluno>(`${environment.API}/alunos/${obj.id}`,
            obj,
            {
                observe : 'response',
                responseType : 'json'
            });
    }

    new(obj : Aluno){

        return this.http.post<Aluno>(`${environment.API}/alunos`,
            obj,
            {
                observe : 'response',
                responseType : 'json'
            });
    }

    delete(obj : Aluno){
        return this.http.delete(`${environment.API}/alunos/${obj.id}`);
    }

    

}