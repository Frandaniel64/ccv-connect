<template>
    <div class="min-h-screen bg-black text-white overflow-hidden flex flex-col">
        <!-- Navigation -->
        <nav class="fixed w-full z-50 bg-black/80 backdrop-blur-sm">
            <div class="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
                <div class="text-xl font-bold text-center md:text-left mb-4 md:mb-0">
                    <span class="text-green-400">CENTRO CRISTIANO</span>
                    <span class="relative ml-2 inline-block group">
                        VIDA CAPITAL
                        <span
                            class="absolute -bottom-1 left-0 w-full h-0.5 bg-green-400 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
                    </span>
                </div>
                <div class="flex flex-wrap justify-center md:space-x-8 gap-4 md:gap-0">
                    <a v-for="item in menuItems" :key="item" href="#" class="relative group py-2 px-3 md:px-0">
                        <span class="text-white/80 group-hover:text-green-400 transition-colors duration-300">
                            {{ item }}
                        </span>
                        <span
                            class="absolute bottom-0 left-0 w-full h-0.5 bg-green-400 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
                    </a>
                </div>
            </div>
        </nav>

        <!-- Hero Section with Parallax -->
        <section class="relative h-screen">
            <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10"></div>
            <div class="absolute right-8 top-1/2 -translate-y-1/2 z-20">
                <div class="flex flex-col space-y-4">
                    <a v-for="n in 5" :key="n" href="#" class="relative group">
                        <span
                            class="inline-block w-12 text-white/80 group-hover:text-green-400 transition-all duration-300 transform group-hover:-translate-x-2">
                            {{ n.toString().padStart(2, '0') }}
                        </span>
                        <span
                            class="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-8"></span>
                    </a>
                </div>
            </div>
            <div class="absolute inset-0 z-0 parallax-bg">
                <!-- Reemplazar con tu imagen de fondo -->
                <div
                    class="w-full h-full bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagen-IUTno1n7ECPVnJaxyUCll9dH87ol2D.png')] bg-cover bg-center transform scale-110">
                </div>
            </div>
            <div class="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center">
                <h1 class="text-4xl md:text-7xl font-bold mb-6 animate-fade-in text-center md:text-left">
                    <span class="block transform hover:scale-105 transition-transform duration-300">BIENVENIDOS A</span>
                    <span class="block text-green-400 text-3xl md:text-5xl mt-2">CENTRO CRISTIANO VIDA CAPITAL</span>
                </h1>
                <p class="text-lg md:text-xl max-w-xl text-white/90 animate-slide-up text-center md:text-left">
                    Un lugar donde encontrarás paz, amor y propósito.
                    Únete a nosotros en este viaje espiritual.
                </p>
                <div
                    class="mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 animate-fade-in-delay items-center md:items-start">
                    <button class="group relative px-8 py-3 bg-green-400 text-black rounded-full overflow-hidden">
                        <span class="relative z-10 group-hover:text-white transition-colors duration-300">
                            CONÓCENOS
                        </span>
                        <div
                            class="absolute inset-0 bg-black transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300">
                        </div>
                    </button>
                    <button
                        class="group relative px-8 py-3 border border-white/30 rounded-full hover:border-green-400 transition-colors duration-300">
                        <span class="relative z-10">VER SERVICIOS</span>
                        <div
                            class="absolute inset-0 bg-green-400/10 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300">
                        </div>
                    </button>
                </div>
            </div>
        </section>

        <!-- Service Times Section with Floating Cards -->
        <section class="py-20 bg-black relative">
            <div class="absolute inset-0 bg-gradient-to-b from-green-400/5 to-transparent"></div>
            <div class="container mx-auto px-6">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div v-for="service in services" :key="service.title" class="group relative">
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-green-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                        </div>
                        <div
                            class="relative bg-black/50 p-8 border border-green-400/20 rounded-xl backdrop-blur-sm 
                          transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-400/20">
                            <div class="flex items-start space-x-4">
                                <span class="text-green-400 text-2xl">
                                    <i class="fas fa-church"></i>
                                </span>
                                <div>
                                    <h3 class="text-xl font-semibold mb-2 group-hover:text-green-400 transition-colors">
                                        {{ service.title }}
                                    </h3>
                                    <p class="text-white/70">{{ service.time }}</p>
                                    <a href="#"
                                        class="inline-flex items-center space-x-2 text-green-400 mt-4 group-hover:translate-x-2 transition-transform duration-300">
                                        <span>MÁS DETALLES</span>
                                        <i class="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Church Sections Showcase -->
        <section class="py-20 bg-black/90 relative">
            <div class="absolute inset-0 bg-[url('/grid.png')] opacity-10"></div>
            <div class="container mx-auto px-6 relative">
                <h2 class="text-2xl md:text-3xl font-bold mb-12 flex items-center space-x-4">
                    <span class="text-green-400">/</span>
                    <span>NUESTRA IGLESIA</span>
                </h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div v-for="section in churchSections" :key="section.id"
                        class="group relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer">
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 z-10">
                        </div>
                        <img :src="section.image" :alt="section.title"
                            class="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" />
                        <div
                            class="absolute bottom-0 left-0 right-0 p-6 z-20 transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                            <h3 class="text-xl font-bold mb-2 text-green-400">{{ section.title }}</h3>
                            <p
                                class="text-white/80 transform transition-all duration-300 opacity-0 group-hover:opacity-100">
                                {{ section.description }}
                            </p>
                            <button class="mt-4 px-4 py-2 bg-white/10 rounded-full text-sm backdrop-blur-sm 
                             hover:bg-green-400 hover:text-black transition-all duration-300 
                             opacity-0 group-hover:opacity-100">
                                SABER MÁS
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Location Section -->
        <section class="py-20 bg-black">
            <div class="container mx-auto px-6">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div class="text-center lg:text-left">
                        <h2 class="text-3xl md:text-4xl font-bold mb-6">NUESTRA UBICACIÓN</h2>
                        <p class="text-xl text-white/80 mb-8">
                            Te esperamos en nuestras instalaciones ubicadas en el corazón de la ciudad.
                        </p>
                        <div class="space-y-4">
                            <div class="flex items-start space-x-4">
                                <span class="text-green-400 mt-1">
                                    <i class="fas fa-map-marker-alt"></i>
                                </span>
                                <div>
                                    <h3 class="font-semibold">Dirección</h3>
                                    <p class="text-white/70">Av. Principal #123, Ciudad</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-4">
                                <span class="text-green-400 mt-1">
                                    <i class="fas fa-phone"></i>
                                </span>
                                <div>
                                    <h3 class="font-semibold">Teléfono</h3>
                                    <p class="text-white/70">+58 (123) 456-7890</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-4">
                                <span class="text-green-400 mt-1">
                                    <i class="fas fa-envelope"></i>
                                </span>
                                <div>
                                    <h3 class="font-semibold">Correo</h3>
                                    <p class="text-white/70">contacto@vidacapital.org</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="h-[300px] md:h-[400px] w-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.5714286455507!2d-66.8563678!3d10.4914889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDI5JzI5LjQiTiA2NsKwNTEnMjIuOSJX!5e0!3m2!1ses!2sve!4v1635789145784!5m2!1ses!2sve"
                            class="w-full h-full border-0" style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </section>

        <!-- Discover Section with Video -->
        <section class="py-20 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/90 z-10"></div>
            <div class="relative z-20 container mx-auto px-6">
                <div class="max-w-2xl">
                    <h2 class="text-5xl font-bold mb-8 leading-tight">
                        <span class="block text-green-400 text-xl mb-2">NUESTRA MISIÓN</span>
                        DESCUBRE NUESTRA
                        <span class="block">COMUNIDAD</span>
                    </h2>
                    <button class="group flex items-center space-x-4">
                        <div class="relative w-16 h-16 rounded-full bg-green-400 flex items-center justify-center
                          transform transition-transform duration-300 group-hover:scale-110">
                            <i class="fas fa-play text-black text-xl"></i>
                            <div class="absolute inset-0 rounded-full border border-green-400 animate-ping"></div>
                        </div>
                        <span class="text-xl group-hover:text-green-400 transition-colors">VER VIDEO</span>
                    </button>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="bg-black/90 border-t border-green-400/20 py-12">
            <div class="container mx-auto px-6">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <!-- Logo y descripción -->
                    <div class="space-y-4 text-center md:text-left">
                        <div class="text-2xl font-bold">
                            <span class="text-green-400">CENTRO CRISTIANO</span>
                            <span class="block">VIDA CAPITAL</span>
                        </div>
                        <p class="text-white/70 text-sm">
                            Transformando vidas y construyendo una comunidad de fe en el corazón de nuestra ciudad.
                        </p>
                    </div>

                    <!-- Enlaces rápidos -->
                    <div>
                        <h3 class="text-lg font-semibold mb-4 text-green-400">Enlaces Rápidos</h3>
                        <ul class="space-y-2">
                            <li v-for="item in menuItems" :key="item">
                                <a href="#" class="text-white/70 hover:text-green-400 transition-colors duration-300">
                                    {{ item }}
                                </a>
                            </li>
                            <li>
                                <a href="#" class="text-white/70 hover:text-green-400 transition-colors duration-300">
                                    LOGIN
                                </a>
                            </li>
                        </ul>
                    </div>

                    <!-- Redes sociales y contacto -->
                    <div>
                        <h3 class="text-lg font-semibold mb-4 text-green-400">Conéctate</h3>
                        <div class="flex space-x-4 mb-4">
                            <a href="#" class="text-white/70 hover:text-green-400 transition-colors duration-300">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="text-white/70 hover:text-green-400 transition-colors duration-300">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="#" class="text-white/70 hover:text-green-400 transition-colors duration-300">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </div>
                        <p class="text-white/70 text-sm">
                            Teléfono: (123) 456-7890
                        </p>
                        <p class="text-white/70 text-sm">
                            Email: info@vidacapital.org
                        </p>
                    </div>
                </div>

                <!-- Derechos de autor -->
                <div class="mt-8 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
                    <p>&copy; {{ new Date().getFullYear() }} Centro Cristiano Vida Capital. Todos los derechos
                        reservados.</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    name: 'ChurchHomepage',
    setup() {
        const menuItems = ref(['INICIO', 'NOSOTROS', 'MINISTERIOS', 'EVENTOS', 'UBICACIÓN', 'CONTACTO'])

        const services = ref([
            { title: 'Servicio Dominical', time: '10:00 AM' },
            { title: 'Estudio Bíblico', time: 'Miércoles 7:00 PM' },
            { title: 'Jóvenes', time: 'Viernes 7:30 PM' }
        ])

        const churchSections = ref([
            {
                id: 1,
                title: 'NUESTRA MISIÓN',
                description: 'Llevar el mensaje de esperanza y amor a nuestra comunidad',
                image: '/placeholder.svg?height=400&width=300'
            },
            {
                id: 2,
                title: 'NUESTRA VISIÓN',
                description: 'Ser una iglesia que transforma vidas y impacta la sociedad',
                image: '/placeholder.svg?height=400&width=300'
            },
            {
                id: 3,
                title: 'ACTIVIDADES',
                description: 'Descubre cómo servimos y nos conectamos en comunidad',
                image: '/placeholder.svg?height=400&width=300'
            }
        ])

        return {
            menuItems,
            services,
            churchSections
        }
    }
}
</script>

<style>
.parallax-bg {
    transform: translateY(var(--scroll-offset, 0));
    transition: transform 100ms linear;
}

@keyframes fade-in {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes slide-up {
    from {
        transform: translateY(20px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.animate-fade-in {
    animation: fade-in 1s ease-out;
}

.animate-slide-up {
    animation: slide-up 1s ease-out;
}

.animate-fade-in-delay {
    animation: fade-in 1s ease-out 0.5s both;
}

/* Add responsive styles */
@media (max-width: 768px) {
    .parallax-bg {
        transform: none;
    }

    .animate-slide-up {
        animation-delay: 0.3s;
    }
}
</style>