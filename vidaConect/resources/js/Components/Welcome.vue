<!--Primera vista del dashboard-->


<script setup>
import { ref } from 'vue';


const activeMenu = ref('dashboard');

const quickStats = ref([
    {
        title: 'Total Miembros',
        value: '2,847',
        icon: 'fas fa-users',
        bgColor: 'bg-green-400/10 text-green-400',
        trend: 'up',
        percentage: 12
    },
    {
        title: 'Nuevos Visitantes',
        value: '145',
        icon: 'fas fa-user-plus',
        bgColor: 'bg-purple-400/10 text-purple-400',
        trend: 'up',
        percentage: 8
    },
    {
        title: 'Eventos Activos',
        value: '24',
        icon: 'fas fa-calendar-check',
        bgColor: 'bg-blue-400/10 text-blue-400',
        trend: 'down',
        percentage: 3
    }
]);

const recentActivity = ref([
    {
        id: 1,
        title: 'Nuevo evento creado: "Retiro Juvenil 2024"',
        time: 'Hace 2 horas',
        icon: 'fas fa-calendar-plus',
        bgColor: 'bg-green-400/10 text-green-400'
    },
    {
        id: 2,
        title: 'Actualización de horario de servicios',
        time: 'Hace 4 horas',
        icon: 'fas fa-clock',
        bgColor: 'bg-blue-400/10 text-blue-400'
    },
    {
        id: 3,
        title: '15 nuevos registros de membresía',
        time: 'Hace 6 horas',
        icon: 'fas fa-user-plus',
        bgColor: 'bg-purple-400/10 text-purple-400'
    }
]);
</script>

<template>
    <div class="min-h-screen bg-gray-50">
        <!-- Header -->
        <!--    <header class="bg-white border-b border-gray-200">
            <div class="flex items-center justify-between px-8 py-4">
                <div class="flex items-center gap-4">
                    <div class="relative">
                        <i class="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                        <input type="text" placeholder="Buscar..."
                            class="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-green-400 w-64">
                    </div>
                    <button class="p-2 rounded-lg hover:bg-gray-100">
                        <i class="fas fa-bell text-gray-600"></i>
                    </button>
                </div>

             
            </div>
        </header> -->

        <!-- Dashboard Content -->
        <main class="p-4 md:p-6">
            <!-- Quick Stats -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div v-for="stat in quickStats" :key="stat.title"
                    class="bg-white p-4 rounded-lg border border-gray-200 hover:border-green-400/50 transition-colors shadow-sm">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-sm text-gray-500">{{ stat.title }}</p>
                            <p class="text-xl font-semibold mt-0.5">{{ stat.value }}</p>
                        </div>
                        <div :class="['w-10 h-10 rounded-lg flex items-center justify-center', stat.bgColor]">
                            <i :class="['text-lg', stat.icon]"></i>
                        </div>
                    </div>
                    <div class="mt-2 flex items-center gap-1.5 text-sm">
                        <span :class="stat.trend === 'up' ? 'text-green-500' : 'text-red-500'">
                            <i :class="stat.trend === 'up' ? 'fas fa-arrow-up' : 'fas fa-arrow-down'"></i>
                            {{ stat.percentage }}%
                        </span>
                        <span class="text-gray-500">vs mes anterior</span>
                    </div>
                </div>
            </div>

            <!-- Recent Activity & Calendar -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <!-- Recent Activity -->
                <div class="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                    <div class="flex items-center justify-between mb-4">
                        <h2 class="text-base font-semibold text-gray-900">Actividad Reciente</h2>
                        <button class="text-sm text-green-500 hover:text-green-600">Ver todo</button>
                    </div>
                    <div class="space-y-3">
                        <div v-for="activity in recentActivity" :key="activity.id"
                            class="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                            <div :class="['w-8 h-8 rounded-lg flex items-center justify-center', activity.bgColor]">
                                <i :class="['text-base', activity.icon]"></i>
                            </div>
                            <div>
                                <p class="font-medium text-sm">{{ activity.title }}</p>
                                <p class="text-xs text-gray-500 mt-0.5">{{ activity.time }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Calendar -->
                <div class="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                    <div class="flex items-center justify-between mb-4">
                        <h2 class="text-base font-semibold text-gray-900">Calendario</h2>
                        <div class="flex gap-1">
                            <button class="p-1 rounded hover:bg-gray-100">
                                <i class="fas fa-chevron-left text-sm"></i>
                            </button>
                            <button class="p-1 rounded hover:bg-gray-100">
                                <i class="fas fa-chevron-right text-sm"></i>
                            </button>
                        </div>
                    </div>
                    <div class="text-center mb-3">
                        <h3 class="text-base font-medium text-gray-700">Mayo 2024</h3>
                    </div>
                    <div class="grid grid-cols-7 gap-1">
                        <div v-for="day in ['D', 'L', 'M', 'M', 'J', 'V', 'S']" :key="day"
                            class="text-center text-xs text-gray-500 py-1">
                            {{ day }}
                        </div>
                        <div v-for="date in 31" :key="date" :class="[
                            'text-center py-1.5 text-sm rounded cursor-pointer',
                            date === 15 ? 'bg-green-500 text-white' : 'hover:bg-gray-50'
                        ]">
                            {{ date }}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
