import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'http://localhost:8000/api'; // Adjust if needed
    private tokenKey = 'auth_token';

    constructor(private http: HttpClient, private router: Router) { }

    login(credentials: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
            tap((response: any) => {
                if (response.access_token) {
                    this.setToken(response.access_token);
                }
            })
        );
    }

    logout(): void {
        this.http.post(`${this.apiUrl}/logout`, {}, {
            headers: { Authorization: `Bearer ${this.getToken()}` }
        }).subscribe(() => {
            this.removeToken();
            this.router.navigate(['/admin/login']);
        }, () => {
            // Even if API fails, clear token
            this.removeToken();
            this.router.navigate(['/admin/login']);
        });
    }

    setToken(token: string): void {
        localStorage.setItem(this.tokenKey, token);
    }

    getToken(): string | null {
        return localStorage.getItem(this.tokenKey);
    }

    removeToken(): void {
        localStorage.removeItem(this.tokenKey);
    }

    isLoggedIn(): boolean {
        return !!this.getToken();
    }
}
