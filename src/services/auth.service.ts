import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
    providedIn: 'root',
})

export class AuthService {
    constructor(private http: HttpClient) { }

    login(obj: any): Observable<any> {

        return this.http.post(environment.apiAuth, obj, {
            observe: 'response',
            responseType: 'json'
        })
    }



    setToken(text: string) {
        localStorage.setItem('token', text);
    }



    getToken(): string {
        if (localStorage.getItem('token') !== null || localStorage.getItem('token') !== 'null') {

            return localStorage.getItem('token');
        } else {
            return null;
        }
    }



    removeToken() {
        localStorage.setItem('token', null);
    }

    isExp(): boolean {
        const decodedToken = new JwtHelperService().isTokenExpired(this.getToken());
        return decodedToken;
    }



    isLogg() {
        if (this.getToken() === null || this.getToken() === 'null') {
            return false;
        } else {
            if (this.isExp() === true) {
                return false;
            } else {
                return true;
            }
        }
    }



    getEmail() {
        if (this.getToken() === null || this.getToken() === 'null') {

            return null;
        } else {
            const decodedToken = new JwtHelperService().decodeToken(this.getToken());
            return decodedToken.userId;
        }
    }



    getDataExp() {
        const expirationDate = new JwtHelperService().getTokenExpirationDate(this.getToken());
        return expirationDate;
    }

}