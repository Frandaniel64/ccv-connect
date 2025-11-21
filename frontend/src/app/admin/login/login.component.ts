import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, FormsModule, NavbarComponent],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    email = '';
    password = '';
    errorMessage = '';
    isLoading = false;

    constructor(private authService: AuthService, private router: Router) { }

    onSubmit() {
        if (!this.email || !this.password) {
            this.errorMessage = 'Por favor ingrese email y contraseña';
            return;
        }

        this.isLoading = true;
        this.errorMessage = '';

        this.authService.login({ email: this.email, password: this.password }).subscribe({
            next: () => {
                this.isLoading = false;
                this.router.navigate(['/admin/dashboard']);
            },
            error: (err) => {
                this.isLoading = false;
                this.errorMessage = 'Credenciales inválidas o error del servidor';
                console.error(err);
            }
        });
    }
}
