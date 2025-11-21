import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-resources',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './resources.component.html',
    styleUrls: ['./resources.component.css']
})
export class ResourcesComponent {
    // Categorías de recursos
    categories = ['Todos', 'Estudios', 'Devocionales', 'Música', 'Niños', 'Jóvenes'];
    selectedCategory = 'Todos';

    // Recursos (simulado - luego vendrá del backend)
    allResources = [
        {
            title: 'Guía de Estudio Bíblico - Génesis',
            description: 'Material completo para estudio personal y grupal del libro de Génesis',
            category: 'Estudios',
            fileType: 'PDF',
            fileSize: '2.5 MB',
            downloads: 245,
            uploadDate: new Date('2025-11-15'),
            thumbnail: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop'
        },
        {
            title: 'Devocional Semanal - Noviembre',
            description: 'Reflexiones diarias para fortalecer tu fe durante todo el mes',
            category: 'Devocionales',
            fileType: 'PDF',
            fileSize: '1.8 MB',
            downloads: 189,
            uploadDate: new Date('2025-11-01'),
            thumbnail: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=400&h=300&fit=crop'
        },
        {
            title: 'Cancionero de Alabanza 2025',
            description: 'Letras y acordes de nuestras canciones favoritas',
            category: 'Música',
            fileType: 'PDF',
            fileSize: '3.2 MB',
            downloads: 312,
            uploadDate: new Date('2025-10-20'),
            thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop'
        },
        {
            title: 'Historias Bíblicas para Niños',
            description: 'Cuentos ilustrados con enseñanzas bíblicas',
            category: 'Niños',
            fileType: 'PDF',
            fileSize: '5.1 MB',
            downloads: 156,
            uploadDate: new Date('2025-11-10'),
            thumbnail: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop'
        },
        {
            title: 'Manual de Liderazgo Juvenil',
            description: 'Herramientas para líderes de ministerio juvenil',
            category: 'Jóvenes',
            fileType: 'PDF',
            fileSize: '4.3 MB',
            downloads: 98,
            uploadDate: new Date('2025-11-05'),
            thumbnail: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&h=300&fit=crop'
        },
        {
            title: 'Plan de Lectura Bíblica Anual',
            description: 'Lee toda la Biblia en un año con este plan estructurado',
            category: 'Estudios',
            fileType: 'PDF',
            fileSize: '800 KB',
            downloads: 421,
            uploadDate: new Date('2025-01-01'),
            thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop'
        }
    ];

    get filteredResources() {
        if (this.selectedCategory === 'Todos') {
            return this.allResources;
        }
        return this.allResources.filter(r => r.category === this.selectedCategory);
    }

    selectCategory(category: string) {
        this.selectedCategory = category;
    }

    downloadResource(resource: any) {
        // Aquí iría la lógica para descargar el archivo
        console.log('Descargando:', resource.title);
        // Incrementar contador de descargas
        resource.downloads++;
    }

    formatDate(date: Date): string {
        return new Intl.DateTimeFormat('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(date);
    }
}
