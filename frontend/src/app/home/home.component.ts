import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    contactForm: FormGroup;
    formSubmitted = false;
    formSuccess = false;

    // Hero Banners (simulado - luego vendrá del backend)
    banners = [
        {
            title: 'Bienvenidos a Nuestra Iglesia',
            subtitle: 'Un lugar donde encontrarás amor, esperanza y comunidad',
            image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1920&h=1080&fit=crop',
            buttonText: 'Conoce Más',
            buttonLink: '#about'
        },
        {
            title: 'Únete a Nuestros Servicios',
            subtitle: 'Domingos 10:00 AM y 6:00 PM',
            image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=1920&h=1080&fit=crop',
            buttonText: 'Ver Horarios',
            buttonLink: '#events'
        }
    ];

    currentBannerIndex = 0;

    // Misión y Visión (simulado)
    mission = 'Ser una iglesia que transforma vidas a través del amor de Cristo, llevando esperanza y restauración a nuestra comunidad.';
    vision = 'Alcanzar a cada persona con el mensaje del evangelio, formando discípulos comprometidos que impacten el mundo.';

    // Próximas Actividades (simulado)
    upcomingEvents = [
        {
            title: 'Culto de Alabanza',
            date: new Date('2025-11-23'),
            location: 'Templo Principal',
            image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=400&fit=crop'
        },
        {
            title: 'Escuela Bíblica',
            date: new Date('2025-11-24'),
            location: 'Salón de Conferencias',
            image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop'
        },
        {
            title: 'Reunión de Jóvenes',
            date: new Date('2025-11-25'),
            location: 'Auditorio',
            image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop'
        }
    ];

    // Sermones Recientes (simulado)
    recentSermons = [
        {
            title: 'El Poder de la Fe',
            preacher: 'Pastor Juan Pérez',
            thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
        },
        {
            title: 'Viviendo en Gracia',
            preacher: 'Pastora María González',
            thumbnail: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=400&fit=crop',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
        },
        {
            title: 'La Esperanza que Transforma',
            preacher: 'Pastor Carlos Rodríguez',
            thumbnail: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=400&fit=crop',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
        }
    ];

    constructor(private fb: FormBuilder) {
        this.contactForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            email: ['', [Validators.required, Validators.email]],
            phone: [''],
            type: ['contact', Validators.required],
            message: ['', [Validators.required, Validators.minLength(10)]]
        });
    }

    ngOnInit() {
        // Auto-rotate banners
        setInterval(() => {
            this.nextBanner();
        }, 5000);
    }

    nextBanner() {
        this.currentBannerIndex = (this.currentBannerIndex + 1) % this.banners.length;
    }

    prevBanner() {
        this.currentBannerIndex = this.currentBannerIndex === 0
            ? this.banners.length - 1
            : this.currentBannerIndex - 1;
    }

    formatDate(date: Date): string {
        return new Intl.DateTimeFormat('es-ES', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(date);
    }

    onSubmitContact() {
        this.formSubmitted = true;

        if (this.contactForm.valid) {
            console.log('Formulario enviado:', this.contactForm.value);
            // Aquí iría la lógica para enviar al backend

            this.formSuccess = true;
            this.contactForm.reset({ type: 'contact' });
            this.formSubmitted = false;

            // Ocultar mensaje de éxito después de 5 segundos
            setTimeout(() => {
                this.formSuccess = false;
            }, 5000);
        }
    }

    get f() {
        return this.contactForm.controls;
    }
}
