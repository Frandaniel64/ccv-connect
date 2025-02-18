<script setup>
import { ref } from 'vue';
import { Head, Link, router } from '@inertiajs/vue3';
import ApplicationMark from '@/Components/ApplicationMark.vue';
import Banner from '@/Components/Banner.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';

defineProps({
    title: String,
});

const showingNavigationDropdown = ref(false);
const activeMenu = ref('dashboard');

// Menu items for sidebar
const menuItems = ref([
    { id: 'dashboard', name: 'Dashboard', icon: 'fas fa-home' },
    { id: 'events', name: 'Eventos', icon: 'fas fa-calendar' },
    { id: 'services', name: 'Servicios', icon: 'fas fa-church' },
    { id: 'members', name: 'Miembros', icon: 'fas fa-users' },
    { id: 'media', name: 'Multimedia', icon: 'fas fa-photo-video' },
    { id: 'messages', name: 'Mensajes', icon: 'fas fa-envelope' },
    { id: 'settings', name: 'Configuración', icon: 'fas fa-cog' }
]);

const switchToTeam = (team) => {
    router.put(route('current-team.update'), {
        team_id: team.id,
    }, {
        preserveState: false,
    });
};

const logout = () => {
    router.post(route('logout'));
};
</script>

<template>
    <div>

        <Head :title="title" />

        <Banner />

        <div class="min-h-screen bg-gray-100">
            <!-- Sidebar -->
            <aside class="fixed left-0 top-0 h-screen w-64 bg-black border-r border-green-400/20">
                <div class="flex items-center gap-2 px-6 py-4">
                    <div class="text-xl font-bold">
                        <span class="text-green-400">CENTRO</span>
                        <span class="text-white">ADMIN</span>
                    </div>
                </div>

                <nav class="mt-8 px-4">
                    <div v-for="(item, index) in menuItems" :key="index" :class="[
                        'flex items-center gap-3 px-4 py-3 rounded-lg mb-2 cursor-pointer transition-all duration-300',
                        activeMenu === item.id ? 'bg-green-400/10 text-green-400' : 'text-white/70 hover:bg-green-400/5 hover:text-green-400'
                    ]" @click="activeMenu = item.id">
                        <i :class="['text-xl', item.icon]"></i>
                        <span class="text-sm font-medium">{{ item.name }}</span>
                    </div>
                </nav>
            </aside>

            <!-- Main Content Area -->
            <div class="ml-64">
                <nav class="bg-black border-b border-green-400/20">
                    <!-- Primary Navigation Menu -->
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="flex justify-between h-16">
                            <div class="flex items-center justify-end w-full">
                                <div class="hidden sm:flex sm:items-center sm:ms-6">
                                    <div class="ms-3 relative">
                                        <!-- Teams Dropdown -->
                                        <Dropdown v-if="$page.props.jetstream.hasTeamFeatures" align="right" width="60">
                                            <template #trigger>
                                                <span class="inline-flex rounded-md">
                                                    <button type="button"
                                                        class="inline-flex items-center px-3 py-2 border border-green-400/20 text-sm leading-4 font-medium rounded-md text-white/70 bg-black hover:text-green-400 focus:outline-none focus:border-green-400 transition ease-in-out duration-150">
                                                        {{ $page.props.auth.user.current_team.name }}

                                                        <svg class="ms-2 -me-0.5 size-4"
                                                            xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5"
                                                            stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                                        </svg>
                                                    </button>
                                                </span>
                                            </template>

                                            <template #content>
                                                <div class="bg-black border border-green-400/20">
                                                    <!-- Team Management -->
                                                    <div class="block px-4 py-2 text-xs text-green-400">
                                                        Manage Team
                                                    </div>

                                                    <!-- Team Settings -->
                                                    <DropdownLink
                                                        :href="route('teams.show', $page.props.auth.user.current_team)">
                                                        Team Settings
                                                    </DropdownLink>

                                                    <DropdownLink v-if="$page.props.jetstream.canCreateTeams"
                                                        :href="route('teams.create')">
                                                        Create New Team
                                                    </DropdownLink>

                                                    <!-- Team Switcher -->
                                                    <template v-if="$page.props.auth.user.all_teams.length > 1">
                                                        <div class="border-t border-gray-200" />

                                                        <div class="block px-4 py-2 text-xs text-gray-400">
                                                            Switch Teams
                                                        </div>

                                                        <template v-for="team in $page.props.auth.user.all_teams"
                                                            :key="team.id">
                                                            <form @submit.prevent="switchToTeam(team)">
                                                                <DropdownLink as="button">
                                                                    <div class="flex items-center">
                                                                        <svg v-if="team.id == $page.props.auth.user.current_team_id"
                                                                            class="me-2 size-5 text-green-400"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            fill="none" viewBox="0 0 24 24"
                                                                            stroke-width="1.5" stroke="currentColor">
                                                                            <path stroke-linecap="round"
                                                                                stroke-linejoin="round"
                                                                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                        </svg>

                                                                        <div>{{ team.name }}</div>
                                                                    </div>
                                                                </DropdownLink>
                                                            </form>
                                                        </template>
                                                    </template>
                                                </div>
                                            </template>
                                        </Dropdown>
                                    </div>

                                    <!-- Settings Dropdown -->
                                    <div class="ms-3 relative">
                                        <Dropdown align="right" width="48">
                                            <template #trigger>
                                                <button v-if="$page.props.jetstream.managesProfilePhotos"
                                                    class="flex text-sm border-2 border-green-400/20 rounded-full focus:outline-none focus:border-green-400 transition">
                                                    <img class="size-8 rounded-full object-cover"
                                                        :src="$page.props.auth.user.profile_photo_url"
                                                        :alt="$page.props.auth.user.name">
                                                </button>

                                                <span v-else class="inline-flex rounded-md">
                                                    <button type="button"
                                                        class="inline-flex items-center px-3 py-2 border border-green-400/20 text-sm leading-4 font-medium rounded-md text-white/70 bg-black hover:text-green-400 focus:outline-none focus:border-green-400 transition ease-in-out duration-150">
                                                        {{ $page.props.auth.user.name }}

                                                        <svg class="ms-2 -me-0.5 size-4"
                                                            xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5"
                                                            stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                        </svg>
                                                    </button>
                                                </span>
                                            </template>

                                            <template #content>
                                                <div class="bg-black border border-green-400/20">
                                                    <!-- Account Management -->
                                                    <div class="block px-4 py-2 text-xs text-green-400">
                                                        Manage Account
                                                    </div>

                                                    <DropdownLink :href="route('profile.show')"
                                                        class="text-white/70 hover:text-green-400">
                                                        Profile
                                                    </DropdownLink>

                                                    <DropdownLink v-if="$page.props.jetstream.hasApiFeatures"
                                                        :href="route('api-tokens.index')">
                                                        API Tokens
                                                    </DropdownLink>

                                                    <div class="border-t border-gray-200" />

                                                    <!-- Authentication -->
                                                    <form @submit.prevent="logout">
                                                        <DropdownLink as="button">
                                                            Log Out
                                                        </DropdownLink>
                                                    </form>
                                                </div>
                                            </template>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Responsive Navigation Menu -->
                    <div :class="{ 'block': showingNavigationDropdown, 'hidden': !showingNavigationDropdown }"
                        class="sm:hidden bg-black border-t border-green-400/20">
                        <div class="pt-2 pb-3 space-y-1">
                            <ResponsiveNavLink :href="route('dashboard')" :active="route().current('dashboard')">
                                Dashboard
                            </ResponsiveNavLink>
                        </div>

                        <!-- Responsive Settings Options -->
                        <div class="pt-4 pb-1 border-t border-gray-200">
                            <div class="flex items-center px-4">
                                <div v-if="$page.props.jetstream.managesProfilePhotos" class="shrink-0 me-3">
                                    <img class="size-10 rounded-full object-cover"
                                        :src="$page.props.auth.user.profile_photo_url"
                                        :alt="$page.props.auth.user.name">
                                </div>

                                <div>
                                    <div class="font-medium text-base text-gray-800">
                                        {{ $page.props.auth.user.name }}
                                    </div>
                                    <div class="font-medium text-sm text-gray-500">
                                        {{ $page.props.auth.user.email }}
                                    </div>
                                </div>
                            </div>

                            <div class="mt-3 space-y-1">
                                <ResponsiveNavLink :href="route('profile.show')"
                                    :active="route().current('profile.show')">
                                    Profile
                                </ResponsiveNavLink>

                                <ResponsiveNavLink v-if="$page.props.jetstream.hasApiFeatures"
                                    :href="route('api-tokens.index')" :active="route().current('api-tokens.index')">
                                    API Tokens
                                </ResponsiveNavLink>

                                <!-- Authentication -->
                                <form method="POST" @submit.prevent="logout">
                                    <ResponsiveNavLink as="button">
                                        Log Out
                                    </ResponsiveNavLink>
                                </form>

                                <!-- Team Management -->
                                <template v-if="$page.props.jetstream.hasTeamFeatures">
                                    <div class="border-t border-gray-200" />

                                    <div class="block px-4 py-2 text-xs text-gray-400">
                                        Manage Team
                                    </div>

                                    <!-- Team Settings -->
                                    <ResponsiveNavLink :href="route('teams.show', $page.props.auth.user.current_team)"
                                        :active="route().current('teams.show')">
                                        Team Settings
                                    </ResponsiveNavLink>

                                    <ResponsiveNavLink v-if="$page.props.jetstream.canCreateTeams"
                                        :href="route('teams.create')" :active="route().current('teams.create')">
                                        Create New Team
                                    </ResponsiveNavLink>

                                    <!-- Team Switcher -->
                                    <template v-if="$page.props.auth.user.all_teams.length > 1">
                                        <div class="border-t border-gray-200" />

                                        <div class="block px-4 py-2 text-xs text-gray-400">
                                            Switch Teams
                                        </div>

                                        <template v-for="team in $page.props.auth.user.all_teams" :key="team.id">
                                            <form @submit.prevent="switchToTeam(team)">
                                                <ResponsiveNavLink as="button">
                                                    <div class="flex items-center">
                                                        <svg v-if="team.id == $page.props.auth.user.current_team_id"
                                                            class="me-2 size-5 text-green-400"
                                                            xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5"
                                                            stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        <div>{{ team.name }}</div>
                                                    </div>
                                                </ResponsiveNavLink>
                                            </form>
                                        </template>
                                    </template>
                                </template>
                            </div>
                        </div>
                    </div>
                </nav>

                <!-- Page Heading -->
                <header v-if="$slots.header" class="bg-black shadow">
                    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-white/70">
                        <slot name="header" />
                    </div>
                </header>

                <!-- Page Content -->
                <main>
                    <slot />
                </main>
            </div>
        </div>
    </div>
</template>

<style>
/* Add Font Awesome CSS import if not already included in your project */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
</style>
