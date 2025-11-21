import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {
    @Input() currentPage: string = 'home';

    constructor(private router: Router) { }

    navigateTo(path: string, fragment?: string) {
        if (fragment) {
            this.router.navigate([path], { fragment });
        } else {
            this.router.navigate([path]);
        }
    }

    isActive(page: string): boolean {
        return this.currentPage === page;
    }
}
